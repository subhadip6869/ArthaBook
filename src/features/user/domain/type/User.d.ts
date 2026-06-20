export interface UserProfile {
	userId: string;
	email: string;
	isdCode: string | null;
	mobileNumber: string | null;
	fullName: string;
	profilePhotoUrl: string | null;
	dateOfBirth: Date | null;
	gender: "MALE" | "FEMALE" | "OTHERS" | null;
	status: "ACTIVE" | "SUSPENDED" | "DELETED";
	onboardingCompleted: boolean;
	createdAt: Date;
	updatedAt: Date;
}