import { AuthProvider } from "../features/auth";
import { UserProvider } from "../features/user/data/context/UserContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </UserProvider>
    );
}