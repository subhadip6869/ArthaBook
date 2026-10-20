import { AuthForms } from "../components/AuthForms";
import { LogoPanel } from "../components/LogoPanel";

export function AuthPage() {
	return (
		<div className="w-screen bg-[#111B16] p-3 md:p-5">
			<div className="flex flex-col md:flex-row border-2 border-[#26382F] rounded-2xl h-screen w-full bg-forest">
				<LogoPanel className="flex md:w-[45%]" />
				<AuthForms />
			</div>
		</div>
	);
}
