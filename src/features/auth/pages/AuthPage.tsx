import { AuthForms } from "../components/AuthForms";
import { LogoPanel } from "../components/LogoPanel";

export function AuthPage() {
	return (
		<div className="flex h-screen w-screen">
			<LogoPanel size={96} className="hidden md:flex w-[45%]" />
			<AuthForms />
		</div>
	);
}
