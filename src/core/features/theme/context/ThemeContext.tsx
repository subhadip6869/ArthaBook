import { createContext, useEffect, useReducer } from "react";
import {
	initialTheme,
	themeReducer,
	type ThemePreference,
	type ThemeState,
} from "../reducer/themeReducer";

interface ThemeContextType {
	themeState: ThemeState;
	themeDispatch: React.Dispatch<ThemePreference>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [themeState, themeDispatch] = useReducer(themeReducer, initialTheme);

	useEffect(() => {
		const resolved = themeState.mode;

		document.documentElement.dataset.theme = resolved;
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute(
				"content",
				resolved === "dark" ? "#0A0F0D" : "#0D2B1F",
			);
	}, [themeState.mode]);

	return (
		<ThemeContext.Provider value={{ themeState, themeDispatch }}>
			{children}
		</ThemeContext.Provider>
	);
}
