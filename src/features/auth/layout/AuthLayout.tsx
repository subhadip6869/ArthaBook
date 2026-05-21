import { Outlet } from "react-router";
import { LogoPanel } from "../components/LogoPanel";

export function AuthLayout() {
	return (
		<div className="flex h-screen w-screen">
			<LogoPanel size={96} className="w-[45%]" />
			<Outlet />
		</div>
	);
}
