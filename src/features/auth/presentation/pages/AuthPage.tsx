import { AuthForms } from "../components/AuthForms";
import { LogoPanel } from "../components/LogoPanel";

export function AuthPage() {
	return (
		<div className="w-screen bg-[#111B16] p-3 lg:p-5">
			<div className="flex border-2 border-[#26382F] rounded-2xl h-screen w-full bg-forest">
				<LogoPanel className="hidden md:flex w-[45%]" />
				<AuthForms />
			</div>
		</div>
	);
}
