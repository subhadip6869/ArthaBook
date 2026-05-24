import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { auth } from "../firebase/firebase";

interface AuthContextType {
	user: User | null;
	loading: boolean;
	isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
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
