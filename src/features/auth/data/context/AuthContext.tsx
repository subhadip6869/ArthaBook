import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../firebase/firebase";
import { useUser } from "../../../user/data/hooks/useUser";
import { createUser, getCurrentUser } from "../../../user/data/services/userService";

interface AuthContextType {
	user: User | null;
	loading: boolean;
	isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const { dispatch: userDispatch } = useUser();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
			try {
				if (!firebaseUser) {
					setUser(null);
					userDispatch({ type: "CLEAR_USER" });
					return;
				}

				await firebaseUser.reload();
				if (!firebaseUser.emailVerified) {
					await signOut(auth);
					setUser(null);
					userDispatch({ type: "CLEAR_USER" });
					return;
				}

				setUser(firebaseUser);
				try {
					const appUser = await getCurrentUser();
					userDispatch({ type: "FETCH_SUCCESS", payload: appUser, });
				} catch {
					const appUser = await createUser({
						fullName: firebaseUser.displayName ?? "New User",
						isdCode: null,
						mobileNumber: firebaseUser.phoneNumber ?? null,
						profilePhotoUrl: firebaseUser.photoURL ?? null,
						dateOfBirth: null,
						gender: null,
					});
					userDispatch({ type: "FETCH_SUCCESS", payload: appUser });
				}
			} finally {
				setLoading(false);
			}
		});
		return unsubscribe;
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				isAuthenticated: !!user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
