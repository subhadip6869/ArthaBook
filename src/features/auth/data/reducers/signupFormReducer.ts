import type { SignupFormAction, SignupFormState } from "../../domain/types/SignupForm";

export const initialSignupState: SignupFormState = {
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
};

export const signupFormReducer = (
    state: SignupFormState,
    action: SignupFormAction,
) => {
    switch (action.type) {
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_PASSWORD":
            return { ...state, password: action.payload };
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_CONFIRM_PASSWORD":
            return { ...state, confirmPassword: action.payload };
        default:
            return state;
    }
};