import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function AuthForms() {
	const [isSignIn, setIsSignIn] = useState(true);

	return (
		<main className="flex flex-col bg-[#F6F1E6] md:w-[55%] w-full h-full items-center justify-center text-black p-4">
			<div className="flex flex-col w-full max-w-md">
				{/* Title */}
				<div className="self-start">
					<h1 className="font-display text-4xl">Welcome Back</h1>
					<p className="text-[15px] mt-1.5 text-[#56615B]">
						Sign in to your ledger
					</p>
				</div>

				{/* Forms */}
				<div className="mt-10">
					{isSignIn ? <LoginForm /> : <SignupForm />}
				</div>

				{/* Toggle */}
				<div className="flex items-center justify-center gap-1 text-[#56615B] mt-8">
					{isSignIn
						? "New to ArthaBook?"
						: "Already have an account?"}
					<span
						className="text-on-accent underline cursor-pointer"
						onClick={() => setIsSignIn(!isSignIn)}
					>
						{isSignIn ? "Create Account" : "Sign In"}
					</span>
				</div>
			</div>
		</main>
	);
}
