import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../features/auth/data/hooks/useAuth";
import Logo from "../assets/arthabook.png";
import { logoutCurrentUser } from "../features/auth/data/services/authService";
import { useUser } from "../features/user/data/hooks/useUser";

export function AppLayout() {
	const navigate = useNavigate();
	const { state: userState } = useUser();

	async function handleLogout() {
		try {
			await logoutCurrentUser();
			navigate("/auth");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div>
			<nav className="flex justify-between items-center px-6 w-full bg-secondary shadow-sm">
				<div className="relative">
					<div className="flex justify-center items-center">
						<img src={Logo} alt="logo" width={60} height={60} />
						<h1 className="text-2xl font-semibold text-center">
							<span className="text-primary">Artha</span>
							<span className="text-emerald-green">Book</span>
						</h1>
					</div>
				</div>

				<div className="text-sm flex flex-col items-end">
					<div>{userState.user?.fullName}</div>
					<div className="text-gray-500">{userState.user?.email}</div>
				</div>
			</nav>

			<main className="p-6">
				<Outlet />
			</main>
		</div>
	);
}
