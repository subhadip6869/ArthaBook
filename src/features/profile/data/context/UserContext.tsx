import { createContext, useReducer } from "react";
import { initialUserState, userReducer, type UserAction, type UserState } from "../reducers/userReducer";

export interface UserContextType {
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
    // const { user: firebaseUser } = useAuth();
    const [state, dispatch] = useReducer(userReducer, initialUserState);

    /* async function fetchUser() {
        try {
            dispatch({ type: "FETCH_START" });
            let user = await getCurrentUser();
            if (!user) {
                user = await createUser({
                    fullName: firebaseUser?.displayName || "New User",
                    isdCode: null,
                    mobileNumber: firebaseUser?.phoneNumber || null,
                    profilePhotoUrl: firebaseUser?.photoURL || null,
                    dateOfBirth: null,
                    gender: null,
                });
            }
            dispatch({ type: "FETCH_SUCCESS", payload: user });
        } catch (err) {
            dispatch({ type: "FETCH_ERROR", payload: "Failed to load profile" });
        }
    }

    useEffect(() => {
        if (firebaseUser) {
            fetchUser();
        } else {
            dispatch({ type: "CLEAR_USER" });
        }
    }, [firebaseUser]); */

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}