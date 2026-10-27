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
const KEY = "ab_theme";

function readSavedTheme(): ThemePreference | null {
	try {
		const v = localStorage.getItem(KEY);
		if (v === "light" || v === "dark") return v;
	} catch (e) {
		console.error(e);
	}
	return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [themeState, themeDispatch] = useReducer(
		themeReducer,
		initialTheme,
		(initial) => ({
			mode: readSavedTheme() || initial.mode,
		}),
	);

	useEffect(() => {
		const mode = themeState.mode;
		document.documentElement.dataset.theme = mode;
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute("content", mode === "dark" ? "#0A0F0D" : "#0D2B1F");

		try {
			localStorage.setItem(KEY, mode);
		} catch (e) {
			console.error(e);
		}
	}, [themeState.mode]);

	return (
		<ThemeContext.Provider value={{ themeState, themeDispatch }}>
			{children}
		</ThemeContext.Provider>
	);
}
