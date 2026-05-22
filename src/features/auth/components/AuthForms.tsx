import { useState } from "react";
import styles from "./AuthForms.module.css";
import { LoginForm } from "./LoginForm";

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
				<LoginForm />
			</div>
		</div>
	);
}
