import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, type UserCredential } from "firebase/auth";
import { auth } from "../firebase/firebase";

export async function emailSignIn(email: string, password: string): Promise<UserCredential> {
    const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );

    return userCredential;
}

export async function emailSignUp(email: string, password: string, name: string): Promise<UserCredential> {
    const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );

    await updateProfile(userCredential.user, {
        displayName: name,
    });

    return userCredential;
}

export async function logoutCurrentUser() {
    await signOut(auth);
}