import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    type User,
    type UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export async function emailSignIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
    );

    if (!userCredential.user.emailVerified) {
        const unverifiedUser = userCredential.user;
        await signOut(auth);
        return {
            success: false,
            reason: "EMAIL_NOT_VERIFIED",
            user: unverifiedUser,
        };
    }

    return {
        success: true,
        user: userCredential.user,
    };
}

export async function resendVerificationEmail(user: User) {
    if (!user) {
        throw new Error("No authenticated user");
    }
    await sendEmailVerification(user);
}

export async function emailSignUp(
    email: string,
    password: string,
    name: string,
): Promise<UserCredential> {
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
    );
    await updateProfile(userCredential.user, {
        displayName: name,
    });
    await sendEmailVerification(userCredential.user);
    await signOut(auth);
    return userCredential;
}

export async function googleSignIn() {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
}

export async function forgotPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
}

export async function logoutCurrentUser() {
    await signOut(auth);
}
