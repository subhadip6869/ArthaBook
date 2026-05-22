export interface LoginFormState {
    email: string;
    password: string;
}

export interface LoginFormAction {
    type: "SET_EMAIL" | "SET_PASSWORD";
    payload: string;
}