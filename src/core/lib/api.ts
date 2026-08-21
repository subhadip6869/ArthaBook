import axios from "axios";
import { auth } from "../../features/auth/data/firebase/firebase";

export const api = axios.create({
	baseURL: "http://arthabook-api-nest.vercel.app",
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	async (config) => {
		const user = auth.currentUser;
		if (user) {
			const token = await user.getIdToken();
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);