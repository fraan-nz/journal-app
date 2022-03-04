import React from "react";

function AddNote() {
	return (
		<div className="addNote__content">
			<input
				type="text"
				placeholder="Some awesome title"
				className="addNote__title"
				autoComplete="off"
			/>
			<textarea
				placeholder="What happened today?"
				className="addNote__description"
			/>
			<div className="addNote__image">
				<img
					src="https://files.worldwildlife.org/wwfcmsprod/images/HERO_Giant_Panda_113974/hero_small/7270gqb4yg_Bernard_de_wetter_wwf_canon_113974.jpg"
					alt="Note"
				/>
			</div>
		</div>
	);
}

export default AddNote;
