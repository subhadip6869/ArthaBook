import { Navigate, Outlet } from "react-router";
import { useAuth } from "../features/auth/data/hooks/useAuth";

export function ProtectedRoute() {
	const { isAuthenticated, loading } = useAuth();

	if (loading) {
		return <div>Loading...</div>;
	}

	return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
}
