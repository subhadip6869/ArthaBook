import { Link } from "react-router";

export function NotFoundPage() {
	return (
		<div className="flex flex-col justify-center items-center h-screen gap-4">
			<h1 className="text-5xl font-bold">404</h1>

			<p>Page not found</p>

			<Link to="/dashboard">Go Home</Link>
		</div>
	);
}
