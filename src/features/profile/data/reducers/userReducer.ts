import type { UserProfile } from "../../domain/type/User";

export interface UserState {
    user: UserProfile | null;
    loading: boolean;
    error: string | null;
}

export const initialUserState: UserState = {
    user: null,
    loading: false,
    error: null,
};

export type UserAction = { type: "FETCH_START" }
    | {
        type: "FETCH_SUCCESS";
        payload: UserProfile;
    }
    | {
        type: "FETCH_ERROR";
        payload: string;
    }
    | {
        type: "UPDATE_USER";
        payload: Partial<UserProfile>;
    }
    | { type: "CLEAR_USER" };


export function userReducer(state: UserState, action: UserAction): UserState {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                loading: true,
                error: null,
            };

        case "FETCH_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };

        case "FETCH_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "UPDATE_USER":
            return {
                ...state,
                user: state.user
                    ? {
                        ...state.user,
                        ...action.payload,
                    }
                    : null,
            };

        case "CLEAR_USER":
            return initialUserState;

        default:
            return state;
    }
}