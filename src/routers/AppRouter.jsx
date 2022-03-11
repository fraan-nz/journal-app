import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../screens/JournalScreen";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { startLoadingNotes } from "../redux/actions/notes";

function AppRouter() {
	const dispatch = useDispatch();
	const [checkingAuth, setCheckingAuth] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, async (currentUser) => {
			if (currentUser?.uid) {
				dispatch(login(currentUser.uid, currentUser.displayName));
				setIsLoggedIn(true);
				dispatch(startLoadingNotes(currentUser.uid));
			} else {
				setIsLoggedIn(false);
			}
			setCheckingAuth(false);
		});
	}, [dispatch]);

	if (checkingAuth) {
		return <h1>Espere...</h1>;
	}

	return (
		<>
			<Routes>
				<Route element={<PublicRoutes isLoggedIn={isLoggedIn} />}>
					<Route path="/auth/*" element={<AuthRouter />} />
				</Route>
				<Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
					<Route path="/" element={<JournalScreen />} />
				</Route>
				<Route path="*" element={<Navigate to="/auth/login" />} />
			</Routes>
		</>
	);
}

export default AppRouter;
