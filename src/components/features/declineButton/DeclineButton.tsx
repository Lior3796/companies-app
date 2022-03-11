import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { UseAppContext, UseKeyContext } from "../../../context/context";
import { Match } from "../../../types/types";

export const DeclineButton = () => {
	const { matches, setMatches, counter, setCounter } = UseAppContext();
	const keys = UseKeyContext();

	const markCompanyToDecline = () => {
		const newMatches = matches.filter(
			(item: Match): boolean => item.id !== keys.id
		);
		setMatches(newMatches);
		setCounter({ ...counter, decline: counter.decline + 1 });
	};
	return (
		<IconButton
			className="decline-btn"
			onClick={() => markCompanyToDecline()}
			aria-label=""
		>
			<DeleteIcon fontSize="large" />
		</IconButton>
	);
};
