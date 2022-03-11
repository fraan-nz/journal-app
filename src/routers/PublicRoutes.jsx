import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PublicRoutes({ isLoggedIn }) {
	return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
