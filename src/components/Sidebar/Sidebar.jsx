import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import JournalEntries from "../JournalEntries/JournalEntries";

function Sidebar() {
	return (
		<aside className="journal__sidebar">
			<div className="journal__navbar">
				<h3 className="journal__name">Franco</h3>
				<button className="btn">Logout</button>
			</div>
			<div className="journal__new-entry">
				<FaCalendarPlus className="calendar__icon" />
				<p>New Entry</p>
			</div>
			<JournalEntries />
		</aside>
	);
}

export default Sidebar;
