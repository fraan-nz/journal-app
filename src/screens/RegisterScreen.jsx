import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { removeError, setError } from "../redux/actions/ui";
import { startRegisterWithEmailPasswordName } from "../redux/actions/auth";

function RegisterScreen() {
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);

	const { values, handleInputChange } = useForm({
		name: "",
		email: "",
		password: "",
		password2: "",
	});
	const { name, email, password, password2 } = values;

	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startRegisterWithEmailPasswordName(email, password, name));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError("Name is required"));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError("Email is not valid"));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError("Password should be at least 6 characters"));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<div className="auth__container fadeIn">
			<h3 className="auth__title">Register</h3>
			<form className="form" onSubmit={handleRegister}>
				{msgError && <div className="auth__alert-error">{msgError}</div>}
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					value={name}
					onChange={handleInputChange}
				/>
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
				<input
					type="password"
					placeholder="Confirm Password"
					name="password2"
					className="auth__input"
					value={password2}
					onChange={handleInputChange}
				/>
				<button className="btn btn-block btn-primary" type="submit">
					Register
				</button>
			</form>
			<Link to="/auth/login" className="auth__link">
				Already registered?
			</Link>
		</div>
	);
}

export default RegisterScreen;
