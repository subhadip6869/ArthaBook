import { Navigate, Outlet } from "react-router";
import { Loader } from "../core/components/Loader";
import { useAuth } from "../features/auth/data/hooks/useAuth";

export function ProtectedRoute() {
	const { isAuthenticated, loading, user } = useAuth();

	if (loading) {
		return <Loader message="Verifying session..." />;
	}

	return isAuthenticated && user?.emailVerified ? (
		<Outlet />
	) : (
		<Navigate to="/auth" replace />
	);
}

