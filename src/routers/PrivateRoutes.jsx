import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes({ isLoggedIn }) {
	return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
}

export default PrivateRoutes;
