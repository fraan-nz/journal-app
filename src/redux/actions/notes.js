import {
	collection,
	doc,
	setDoc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../firebase/config";
import { imageUpload } from "../../helpers/imageUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { types } from "../actionsTypes/types";

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		console.log(uid);

		const newNote = {
			title: "",
			body: "",
			date: new Date().getTime(),
		};
		const refDoc = doc(collection(db, `${uid}/journal/notes`));
		await setDoc(refDoc, newNote);

		dispatch(addNewNote(refDoc.id, newNote));
		dispatch(activeNote(refDoc.id, newNote));
	};
};

export const activeNote = (id, note) => {
	return {
		type: types.notesActive,
		payload: {
			id,
			...note,
		},
	};
};

export const addNewNote = (id, note) => {
	return {
		type: types.notesAddNew,
		payload: {
			id,
			...note,
		},
	};
};

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};

export const setNotes = (notes) => {
	return { type: types.notesLoad, payload: notes };
};

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!note.url) {
			delete note.url;
		}

		const noteToFirestore = { ...note };
		delete noteToFirestore.id;

		const refDoc = doc(db, `${uid}/journal/notes/${note.id}`);
		await updateDoc(refDoc, noteToFirestore);

		dispatch(refreshNote(note));

		Swal.fire("Saved", note.title, "success");
	};
};

export const refreshNote = (note) => {
	return {
		type: types.notesUpdate,
		payload: {
			id: note.id,
			note,
		},
	};
};

export const startImageUploading = (file) => {
	return async (dispatch, getState) => {
		const { active } = getState().notes;

		Swal.fire({
			title: "Uploading...",
			text: "Please wait",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		const fileUrl = await imageUpload(file);

		active.url = fileUrl;
		dispatch(startSaveNote(active));

		Swal.close();
	};
};

export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		Swal.fire({
			title: "Deleting...",
			text: "Please wait",
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
			},
		});

		const refDoc = doc(db, `${uid}/journal/notes/${id}`);
		await deleteDoc(refDoc);

		dispatch(deleteNote(id));
		Swal.close();
	};
};

export const deleteNote = (id) => {
	return {
		type: types.notesDelete,
		payload: id,
	};
};

export const notesLogout = () => {
	return {
		type: types.notesLogoutCleaning,
	};
};
