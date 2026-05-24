import type { LoginFormAction, LoginFormState } from "../../domain/types/LoginForm";

export const initialLoginState: LoginFormState = {
    email: "",
    password: "",
};

export const loginFormReducer = (state: LoginFormState, action: LoginFormAction) => {
    switch (action.type) {
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_PASSWORD":
            return { ...state, password: action.payload };
        default:
            return state;
    }
};