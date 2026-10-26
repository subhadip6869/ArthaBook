
export type ThemePreference = "light" | "dark";

export interface ThemeState {
    mode: ThemePreference
}

export const initialTheme: ThemeState = {
    mode: 'light'
};

export function themeReducer(state: ThemeState, action: ThemePreference): ThemeState {
    return {
        ...state,
        mode: action
    }
}