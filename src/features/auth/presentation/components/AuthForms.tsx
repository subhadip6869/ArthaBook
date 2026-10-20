import { useState } from "react";
import styles from "./AuthForms.module.css";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function AuthForms() {
	const [isSignIn, setIsSignIn] = useState(true);

	return (
		<main className="flex flex-col bg-[#F6F1E6] md:w-[55%] w-full h-full items-start justify-center text-black p-4">
			<div className="font-display text-4xl">
				<span>Welcome Back</span>
			</div>

			<div className="w-full min-w-md">
				<div className="flex flex-col w-[75%] md:w-[50%]">
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
		</main>
	);
}
