import React from "react";
import { Link } from "react-router-dom";

function RegisterScreen() {
	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form className="form">
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
				/>
				<input
					type="text"
					placeholder="Email"
					name="email"
					autoComplete="off"
					className="auth__input"
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					name="confirm"
					className="auth__input"
				/>
				<button className="btn btn-block btn-primary" type="submit">
					Register
				</button>
			</form>
			<Link to="/auth/login" className="auth__link">
				Already registered?
			</Link>
		</>
	);
}

export default RegisterScreen;
