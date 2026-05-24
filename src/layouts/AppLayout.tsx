import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../features/auth/data/hooks/useAuth";
import { logoutCurrentUser } from "../features/auth/data/services/authService";

export function AppLayout() {
	const navigate = useNavigate();

	const { user } = useAuth();

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
			<nav className="flex justify-between items-center px-6 py-4 border-b">
				<div>
					<h1 className="text-xl font-semibold">ArthaBook</h1>

					<p className="text-sm text-gray-500">
						{user?.displayName ?? user?.email}
					</p>
				</div>

				<button
					onClick={handleLogout}
					className="px-4 py-2 rounded-md border cursor-pointer hover:bg-gray-100 transition-colors"
				>
					Sign Out
				</button>
			</nav>

			<main className="p-6">
				<Outlet />
			</main>
		</div>
	);
}
