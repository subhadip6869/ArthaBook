import axios from "axios";
import { auth } from "../../features/auth/data/firebase/firebase";

export const api = axios.create({
	baseURL: "https://c9c75ad4-c56f-4fb7-a704-73e719a0636a-prod.e1-us-east-azure.choreoapis.dev/arthabook/arthabook-api/v1.0/api",
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
