import React from "react";
import ReactDOM from "react-dom";
import JournalApp from "./JournalApp";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<JournalApp />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
