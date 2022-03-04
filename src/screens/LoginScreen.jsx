import React from "react";
import { Link } from "react-router-dom";

function LoginScreen() {
	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form className="form">
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
				<button className="btn btn-block btn-primary" type="submit">
					Login
				</button>
				<div className="google-btn">
					<div className="google-icon-wrapper">
						<img
							className="google-icon"
							src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
							alt="google button"
						/>
					</div>
					<p className="btn-text">Sign in with google</p>
				</div>
			</form>
			<Link to="/auth/register" className="auth__link">
				Create new account
			</Link>
		</>
	);
}

export default LoginScreen;
