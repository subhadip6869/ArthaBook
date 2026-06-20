export interface CreateUserRequest {
    fullName: string;
    isdCode: string | null;
    mobileNumber: string | null;
    profilePhotoUrl: string | null;
    dateOfBirth: string | null;
    gender: "MALE" | "FEMALE" | "OTHERS" | null;
}