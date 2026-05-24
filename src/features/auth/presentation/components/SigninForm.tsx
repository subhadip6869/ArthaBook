import { useReducer, useState } from "react";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router";
import { PrimaryButton } from "../../../../core/components/Buttons";
import { Field, Input } from "../../../../core/components/InputComponents";
import {
	initialSignupState,
	signupFormReducer,
} from "../../data/reducers/signupFormReducer";
import { emailSignUp } from "../../data/services/authService";

export function SigninForm() {
	const [state, dispatch] = useReducer(signupFormReducer, initialSignupState);
	const [passVisible, setPassVisible] = useState(false);

	const navigate = useNavigate();

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSignup() {
		try {
			setLoading(true);
			setError("");

			if (state.password !== state.confirmPassword) {
				setError("Passwords do not match");
				return;
			}

			await emailSignUp(state.email, state.password, state.name);

			navigate("/dashboard");
		} catch (error) {
			setError("Failed to create account");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSignup();
			}}
		>
			<Field label="Full Name" labelFor="name-signup">
				<Input
					type="text"
					name="name"
					value={state.name}
					onChange={(e) =>
						dispatch({
							type: "SET_NAME",
							payload: e.target.value,
						})
					}
					id="name-signup"
					placeholder="Enter your full name"
				/>
			</Field>

			<Field label="Email Address" labelFor="email-signup">
				<Input
					type="email"
					name="email"
					value={state.email}
					onChange={(e) =>
						dispatch({
							type: "SET_EMAIL",
							payload: e.target.value,
						})
					}
					id="email-signup"
					placeholder="Enter your email"
				/>
			</Field>

			<Field label="Enter Password" labelFor="password-signup">
				<Input
					type="password"
					name="password"
					value={state.password}
					onChange={(e) =>
						dispatch({
							type: "SET_PASSWORD",
							payload: e.target.value,
						})
					}
					id="password-signup"
					placeholder="Enter your password"
				/>
			</Field>

			<Field label="Confirm Password" labelFor="confirm-pass-signup">
				<span className="flex justify-center items-center relative">
					<Input
						type={passVisible ? "text" : "password"}
						name="confirm-password"
						value={state.confirmPassword}
						onChange={(e) =>
							dispatch({
								type: "SET_CONFIRM_PASSWORD",
								payload: e.target.value,
							})
						}
						id="confirm-pass-signup"
						placeholder="Confirm your password"
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

			{/* Error Message */}
			{error && <p className="text-red-500 text-sm mt-2">{error}</p>}

			<PrimaryButton className="w-full mt-5" isLoading={loading}>
				Create Account
			</PrimaryButton>
		</form>
	);
}
