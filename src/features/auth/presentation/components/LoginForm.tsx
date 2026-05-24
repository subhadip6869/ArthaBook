import type { User } from "firebase/auth";
import { useReducer, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
	PrimaryButton,
	SecondaryButton,
} from "../../../../core/components/Buttons";
import { Field, Input } from "../../../../core/components/InputComponents";
import { Modal } from "../../../../core/components/Modal";
import {
	initialLoginState,
	loginFormReducer,
} from "../../data/reducers/loginFormReducer";
import {
	emailSignIn,
	resendVerificationEmail,
} from "../../data/services/authService";

export function LoginForm() {
	const [passVisible, setPassVisible] = useState(false);
	const [state, dispatch] = useReducer(loginFormReducer, initialLoginState);

	const navigate = useNavigate();

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [showVerificationModal, setShowVerificationModal] = useState(false);
	const [unverifiedUser, setUnverifiedUser] = useState<User | null>(null);

	async function handleLogin() {
		try {
			setLoading(true);
			setError("");
			let result = await emailSignIn(state.email, state.password);
			if (!result.success) {
				if (result.reason === "EMAIL_NOT_VERIFIED") {
					setUnverifiedUser(result.user);
					setShowVerificationModal(true);
					return;
				}
			}
			navigate("/dashboard");
		} catch (error) {
			setError("Invalid email or password");
		} finally {
			setLoading(false);
		}
	}

	async function handleResendVerification() {
		if (!unverifiedUser) {
			return;
		}
		try {
			await resendVerificationEmail(unverifiedUser);
			setShowVerificationModal(false);
			toast.success("Verification email resent successfully.");
		} catch (error) {
			toast.error("Failed to resend verification email.");
		}
	}

	return (
		<>
			{showVerificationModal && (
				<Modal
					open={showVerificationModal}
					title="Verify Your Email"
					message="Your email address has not been verified yet."
					onClose={() => setShowVerificationModal(false)}
					onConfirm={handleResendVerification}
					confirmText="Resend Email"
					cancelText="Close"
				/>
			)}

			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleLogin();
				}}
			>
				<Field label="Email Address" labelFor="email-login">
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
						id="email-login"
						placeholder="Enter your email"
					/>
				</Field>

				<Field label="Password" labelFor="password-login">
					<span className="flex justify-center items-center relative">
						<Input
							type={passVisible ? "text" : "password"}
							name="password"
							value={state.password}
							onChange={(e) =>
								dispatch({
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

				{/* Error Message */}
				{error && <p className="text-red-500 text-sm mt-2">{error}</p>}

				<div className="flex justify-end items-center text-sm text-medium-gray/80 gap-2 cursor-pointer hover:text-medium-gray transition-colors">
					<span>Forgot Password?</span>
				</div>

				<PrimaryButton className="w-full" isLoading={loading}>
					Login
				</PrimaryButton>

				<p className="text-center uppercase text-sm mt-3 text-medium-gray/90">
					Or continue with
				</p>

				<SecondaryButton className="w-full mt-3 items-center gap-2">
					<span>
						<FcGoogle size={24} />
					</span>
					<span>Continue with Google</span>
				</SecondaryButton>
			</form>
		</>
	);
}
