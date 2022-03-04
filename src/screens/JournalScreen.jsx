import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import NothingSelected from "../components/JournalMain/NothingSelected";
import Notes from "../components/JournalMain/Notes/Notes";

function JournalScreen() {
	return (
		<div className="journal">
			<Sidebar />
			<main className="journal__main">
				{/* <NothingSelected /> */}
				<Notes />
			</main>
		</div>
	);
}

export default JournalScreen;
