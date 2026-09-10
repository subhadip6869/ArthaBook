import { api } from "../../../../core/lib/api";
import type { CreateUserRequest } from "../../domain/type/CreateUserRequest";
import type { UserProfile } from "../../domain/type/User";

export async function getCurrentUser(): Promise<UserProfile> {
  const response = await api.get<UserProfile>("/v1/profile/users");
  return response.data;
}

export async function createUser(
  payload: CreateUserRequest,
): Promise<UserProfile> {
  const response = await api.post<UserProfile>("/v1/profile/users", payload);
  return response.data;
}
