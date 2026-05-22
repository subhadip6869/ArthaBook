import { useReducer, useState } from "react";
import { FiEye } from "react-icons/fi";
import { PrimaryButton } from "../../../core/components/Buttons";
import { Field, Input } from "../../../core/components/InputComponents";
import type { LoginFormAction, LoginFormState } from "../types/LoginForm";

const loginFormData: LoginFormState = {
	email: "",
	password: "",
};

const loginFormReducer = (state: LoginFormState, action: LoginFormAction) => {
	switch (action.type) {
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_PASSWORD":
			return { ...state, password: action.payload };
		default:
			return state;
	}
};

export function LoginForm() {
	const [passVisible, setPassVisible] = useState(false);
	const [loginState, loginDispatch] = useReducer(
		loginFormReducer,
		loginFormData,
	);

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<Field label="Email Address" labelFor="email-login">
				<Input
					type="email"
					name="email"
					value={loginState.email}
					onChange={(e) =>
						loginDispatch({
							type: "SET_EMAIL",
							payload: e.target.value,
						})
					}
					id="email-login"
					placeholder="Enter your email"
				/>
			</Field>

			<Field label="Password" labelFor="password-login">
				<span className="flex justify-center items-center relative">
					<Input
						type={passVisible ? "text" : "password"}
						name="password"
						value={loginState.password}
						onChange={(e) =>
							loginDispatch({
								type: "SET_PASSWORD",
								payload: e.target.value,
							})
						}
						id="password-login"
						placeholder="Enter your password"
					/>
					<button
						type="button"
						className="absolute right-0 p-3 cursor-pointer"
						onClick={() => setPassVisible(!passVisible)}
					>
						<FiEye className="text-medium-gray/70 hover:text-medium-gray transition-colors" />
					</button>
				</span>
			</Field>

			<div
				className="flex justify-end items-center text-sm text-medium-gray/80 gap-2 cursor-pointer hover:text-medium-gray transition-colors"
				onClick={() => {}}
			>
				<span>Forgot Password?</span>
			</div>

			<PrimaryButton className="w-full">Login</PrimaryButton>

			<p className="text-center uppercase text-sm mt-3 text-medium-gray/90">
				Or continue with
			</p>
		</form>
	);
}
