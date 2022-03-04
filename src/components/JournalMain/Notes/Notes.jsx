import React from "react";
import AddNote from "./AddNote";
import NoteTopBar from "./NoteTopBar";

function Notes() {
	return (
		<div className="notes__content">
			<NoteTopBar />
			<AddNote />
		</div>
	);
}

export default Notes;
