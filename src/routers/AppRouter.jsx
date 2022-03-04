import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import JournalScreen from "../screens/JournalScreen";

function AppRouter() {
	return (
		<>
			<Routes>
				<Route path="/auth/*" element={<AuthRouter />} />
				<Route path="/" element={<JournalScreen />} />
				<Route path="*" element={<Navigate to="/auth/login" />} />
			</Routes>
		</>
	);
}

export default AppRouter;
