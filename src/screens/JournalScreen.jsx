import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import NothingSelected from "../components/JournalMain/NothingSelected";
import Notes from "../components/JournalMain/Notes/Notes";
import { useSelector } from "react-redux";

function JournalScreen() {
	const { active } = useSelector((state) => state.notes);
	return (
		<div className="journal">
			<Sidebar />
			<main className="journal__main fadeIn">
				{active ? <Notes /> : <NothingSelected />}
			</main>
		</div>
	);
}

export default JournalScreen;
