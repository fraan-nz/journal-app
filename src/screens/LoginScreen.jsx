import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
	startLoginEmailPassword,
	startGoogleLogin,
} from "../redux/actions/auth";

function LoginScreen() {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.ui);

	const { values, handleInputChange } = useForm({
		email: "test@test.com",
		password: "test1234",
	});

	const { email, password } = values;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	return (
		<div className="auth__container fadeIn">
			<h3 className="auth__title">Login</h3>
			<form className="form" onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					autoComplete="off"
					className="auth__input"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>
				<button
					className="btn btn-block btn-primary"
					type="submit"
					disabled={loading}
				>
					Login
				</button>
				<div className="google-btn" onClick={handleGoogleLogin}>
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
		</div>
	);
}

export default LoginScreen;
