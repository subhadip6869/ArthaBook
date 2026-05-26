import { Navigate, Outlet } from "react-router";
import { useAuth } from "../features/auth/data/hooks/useAuth";

export function PublicRoute() {
	const { isAuthenticated, loading, user } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}

	return !isAuthenticated || !user?.emailVerified ? (
		<Outlet />
	) : (
		<Navigate to="/dashboard" replace />
	);
}
