import { useState } from "react";
import styles from "./AuthForms.module.css";

export function AuthForms() {
	const [isSignIn, setIsSignIn] = useState(true);

	return (
		<div className="flex lg:w-[55%] w-full items-center justify-center">
			<div className="flex flex-col w-[60%] lg:w-[50%]">
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
				<div className="flex flex-col">
					<label htmlFor="email-login">Email Address</label>
					<input
						type="email"
						name="email"
						id="email-login"
						className="px-2 py-1 w-full bg-secondary rounded-sm border-2 border-medium-gray/30 focus:outline-none focus:border-primary/60 transition-colors"
					/>
				</div>
			</div>
		</div>
	);
}
