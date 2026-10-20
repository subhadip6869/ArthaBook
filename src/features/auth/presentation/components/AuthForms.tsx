import { useState } from "react";
import ArthabookLogo from "../../../../core/components/ArthabookLogo";
import styles from "./AuthForms.module.css";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function AuthForms() {
	const [isSignIn, setIsSignIn] = useState(true);

	return (
		<div className="flex flex-col bg-[#111B16] lg:w-[55%] w-full items-center justify-center text-white">
			<div className="relative w-full mb-12 lg:hidden">
				<div className="flex justify-center items-center">
					<ArthabookLogo />
				</div>
			</div>

			<div className="flex flex-col w-[75%] lg:w-[50%]">
				{/* Toggle */}
				<div className="flex mb-5">
					<button
						className={`${styles.authToggle} ${isSignIn ? styles.active : ""} cursor-pointer`}
						onClick={() => setIsSignIn(true)}
					>
						Sign In
					</button>
					<button
						className={`${styles.authToggle} ${isSignIn ? "" : styles.active} cursor-pointer`}
						onClick={() => setIsSignIn(false)}
					>
						Create Account
					</button>
				</div>

				{/* Forms */}
				{isSignIn ? <LoginForm /> : <SignupForm />}
			</div>
		</div>
	);
}
