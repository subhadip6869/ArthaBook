import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Toaster } from "sonner";
import { AuthPage, AuthProvider } from "./features/auth";
import { NotFoundPage } from "./features/common";
import { DashboardPage } from "./features/dashboard";
import "./index.css";
import { AppLayout } from "./layouts";
import { ProtectedRoute, PublicRoute } from "./routes";

createRoot(document.getElementById("root")!).render(
	<>
		<Toaster richColors position="top-right" />
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					{/* Root Redirect */}
					<Route path="/" element={<Navigate to="/auth" replace />} />

					{/* Public Routes */}
					<Route element={<PublicRoute />}>
						<Route path="/auth" element={<AuthPage />} />
					</Route>

					{/* Protected App Routes */}
					<Route element={<ProtectedRoute />}>
						<Route element={<AppLayout />}>
							<Route
								path="/dashboard"
								element={<DashboardPage />}
							/>

							{/* <Route
							path="/investments"
							element={<InvestmentsPage />}
						/> */}
						</Route>
					</Route>

					{/* 404 */}
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	</>,
);
