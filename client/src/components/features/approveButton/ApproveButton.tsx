import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UseKeyContext, UseAppContext } from "../../../context/context";
export const ApproveButton = () => {
	const keys = UseKeyContext();
	const { counter, setCounter } = UseAppContext();
	console.log(counter);
	return (
		<div className="approve-btn">
			<IconButton
				onClick={() => setCounter({ ...counter, approve: counter.approve + 1 })}
				aria-label="add to shopping cart"
			>
				<FavoriteIcon fontSize="large" />
			</IconButton>
		</div>
	);
};
