import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const loadNotes = async (uid) => {
	const docRef = query(collection(db, `${uid}/journal/notes`));
	const docsSnap = await getDocs(docRef);
	const notes = [];

	docsSnap.forEach((doc) => {
		notes.push({
			id: doc.id,
			...doc.data(),
		});
	});
	return notes;
};
