export interface SignupFormState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface SignupFormAction {
    type: "SET_EMAIL" | "SET_PASSWORD" | "SET_NAME" | "SET_CONFIRM_PASSWORD";
    payload: string;
}