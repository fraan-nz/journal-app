import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

function AuthRouter() {
	return (
		<div className="auth__main">
			<div className="auth__container">
				<Routes>
					<Route path="login" element={<LoginScreen />} />
					<Route path="register" element={<RegisterScreen />} />
					<Route path="*" element={<Navigate to="login" />} />
				</Routes>
			</div>
		</div>
	);
}

export default AuthRouter;
