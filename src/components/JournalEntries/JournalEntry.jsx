import React from "react";

function JournalEntry() {
	return (
		<div className="journal__entry">
			<div
				className="journal__entry-picture"
				style={{
					backgroundImage:
						"url(https://okdiario.com/img/2020/02/21/el-oso-panda--en-peligro-de-extincion_-1.jpg)",
				}}
			/>
			<div className="journal__entry-body">
				<p className="journal__entry-title">titulo</p>
				<p className="journal__entry-content">
					descripcion asdas dasdasda sdasdasdasd fasfgdsfh adfdfas
				</p>
			</div>
			<div className="journal__entry-date">
				<p>viernes</p>
				<p>28</p>
			</div>
		</div>
	);
}

export default JournalEntry;
