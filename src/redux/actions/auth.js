import { types } from "../actionsTypes/types";
import {
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase/config";
import { finishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";
import { notesLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch(() => {
				dispatch(finishLoading());
				Swal.fire("Error", "Email or password do not exist", "error");
			});
	};
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(auth.currentUser, {
					displayName: name,
				});

				dispatch(login(user.uid, user.displayName));
			})
			.catch(() => {
				Swal.fire(
					"Error",
					"Failed to start with Google, please try again",
					"error"
				);
			});
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		signInWithPopup(auth, googleProvider).then(({ user }) => {
			dispatch(login(user.uid, user.displayName));
		});
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: {
			uid,
			displayName,
		},
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await signOut(auth);
		dispatch(logout());
		dispatch(notesLogout());
	};
};

export const logout = () => {
	return {
		type: types.logout,
	};
};
