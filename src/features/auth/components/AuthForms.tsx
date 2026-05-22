import { useState } from "react";
import Logo from "../../../assets/arthabook.png";
import styles from "./AuthForms.module.css";
import { LoginForm } from "./LoginForm";
import { SigninForm } from "./SigninForm";

export function AuthForms() {
	const [isSignIn, setIsSignIn] = useState(true);

	return (
		<div className="flex flex-col lg:w-[55%] w-full items-center justify-center">
			<div className="relative w-full mb-12 lg:hidden">
				<div className="flex justify-center items-center">
					<img src={Logo} alt="logo" width={80} height={80} />
					<h1 className="text-3xl font-semibold text-center">
						<span className="text-primary">Artha</span>
						<span className="text-emerald-green">Book</span>
					</h1>
				</div>
				<p className="text-sm text-center text-medium-gray/80 absolute bottom-0 w-full">
					Your wealth. Your purpose. Your ledger.
				</p>
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
				{isSignIn ? <LoginForm /> : <SigninForm />}
			</div>
		</div>
	);
}
