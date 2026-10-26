import { ThemeProvider } from "../core/features/theme/context/ThemeContext";
import { AuthProvider } from "../features/auth";
import { UserProvider } from "../features/profile/data/context/UserContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<UserProvider>
				<AuthProvider>{children}</AuthProvider>
			</UserProvider>
		</ThemeProvider>
	);
}
