import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { activeNote, startDeleting } from "../../../redux/actions/notes";

function AddNote() {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.notes);
	const { values, handleInputChange, reset } = useForm(active);
	const { body, title } = values;

	const activeId = useRef(active.id);

	useEffect(() => {
		if (active.id !== activeId.current) {
			reset(active);
			activeId.current = active.id;
		}
	}, [active, reset]);

	useEffect(() => {
		dispatch(activeNote(values.id, { ...values }));
	}, [values, dispatch]);

	const handleDelete = () => {
		dispatch(startDeleting(values.id));
	};

	return (
		<div className="addNote__content">
			<input
				type="text"
				placeholder="Some awesome title"
				className="addNote__title"
				autoComplete="off"
				value={title}
				onChange={handleInputChange}
				name="title"
			/>
			<textarea
				placeholder="What happened today?"
				className="addNote__description"
				value={body}
				onChange={handleInputChange}
				name="body"
			/>
			{active.url && (
				<div className="addNote__image">
					<img src={active.url} alt="Note" />
				</div>
			)}
			<button className="btn btn-primary btn-delete" onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
}

export default AddNote;
