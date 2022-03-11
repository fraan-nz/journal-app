import React from "react";
import moment from "moment";
import { activeNote } from "../../redux/actions/notes";
import { useDispatch } from "react-redux";

function JournalEntry({ id, date, title, body, url }) {
	const dispatch = useDispatch();
	const noteDate = moment(date);

	const handleEntryClick = () => {
		dispatch(activeNote(id, { date, title, body, url }));
	};

	return (
		<div className="journal__entry fadeInLeft" onClick={handleEntryClick}>
			{url && (
				<div
					className="journal__entry-picture"
					style={{
						backgroundImage: `url(${url})`,
					}}
				/>
			)}
			<div className="journal__entry-body">
				<p className="journal__entry-title">{title}</p>
				<p className="journal__entry-content">{body}</p>
			</div>
			<div className="journal__entry-date">
				<p>{noteDate.format("dddd")}</p>
				<p>{noteDate.format("Do")}</p>
			</div>
		</div>
	);
}

export default JournalEntry;
