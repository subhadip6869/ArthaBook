import { Navigate, Outlet } from "react-router";
import { Loader } from "../core/components/Loader";
import { useAuth } from "../features/auth/data/hooks/useAuth";

export function PublicRoute() {
	const { isAuthenticated, loading, user } = useAuth();

	if (loading) {
		return <Loader message="Loading..." />;
	}

	return !isAuthenticated || !user?.emailVerified ? (
		<Outlet />
	) : (
		<Navigate to="/dashboard" replace />
	);
}

