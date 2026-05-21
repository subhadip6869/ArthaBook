import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { AuthLayout, LoginPage, SignupPage } from "./features/auth";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<AuthLayout />}>
				<Route index element={<Navigate to="login" replace />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignupPage />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);
