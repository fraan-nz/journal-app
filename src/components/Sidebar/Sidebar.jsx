import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../redux/actions/auth";
import { startNewNote } from "../../redux/actions/notes";
import JournalEntries from "../JournalEntries/JournalEntries";

function Sidebar() {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(startLogout());
	};

	const handleAddNew = () => {
		dispatch(startNewNote());
	};

	return (
		<aside className="journal__sidebar fadeIn">
			<div className="journal__navbar">
				<h3 className="journal__name">{name}</h3>
				<button className="btn" onClick={handleLogout}>
					Logout
				</button>
			</div>
			<div className="journal__new-entry" onClick={handleAddNew}>
				<FaCalendarPlus className="calendar__icon" />
				<p>New Entry</p>
			</div>
			<JournalEntries />
		</aside>
	);
}

export default Sidebar;
