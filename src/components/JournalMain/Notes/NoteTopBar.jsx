import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	startImageUploading,
	startSaveNote,
} from "../../../redux/actions/notes";

function NoteTopBar() {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.notes);

	const handleSave = () => {
		dispatch(startSaveNote(active));
	};

	const handlePictureUpload = () => {
		document.querySelector("#fileSelector").click();
	};
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startImageUploading(file));
		}
	};

	return (
		<div className="note__top-bar">
			<span>{moment(new Date()).format("MMMM Do YYYY")}</span>
			<div>
				<input
					type="file"
					id="fileSelector"
					name="file"
					style={{ display: "none" }}
					onChange={handleFileChange}
				/>
				<button className="btn" onClick={handlePictureUpload}>
					Picture
				</button>
				<button className="btn" onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
}

export default NoteTopBar;
