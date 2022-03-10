import React, { useState, FC, useRef, RefObject, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { filterByLabel } from "../../../utililties/filterSearch";
import { UseAppContext } from "../../../context/context";
import { blue } from "@mui/material/colors";

export const SelectLables: FC = () => {
	const { matches, setMatches, theme } = UseAppContext();
	const checkBoxRef: RefObject<HTMLButtonElement> = useRef(null);

	const setOptionToCheckbox = (option: string) => {
		const filterdMatches = filterByLabel(matches, option);
		setMatches(filterdMatches);
	};

	useEffect(() => {
		if (theme) return;
		const svgElement = checkBoxRef.current?.children[0];
	}, [theme]);
	const label = { inputProps: { "aria-label": "Checkbox demo" } };
	const checkboxStyle = {
		color: theme && blue[800],
		"&.Mui-checked": {
			color: theme && blue[600],
		},
	};
	return (
		<div
			style={{
				display: "flex",
				flex: 1,
				width: "100%",
			}}
		>
			<FormGroup>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Decline")}
					control={<Checkbox {...label} color="secondary" sx={checkboxStyle} />}
					label="Decline"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Possible")}
					control={<Checkbox sx={checkboxStyle} />}
					label="Possible"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Open")}
					control={<Checkbox sx={checkboxStyle} />}
					label="Open"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Close")}
					control={<Checkbox sx={checkboxStyle} />}
					label="Close"
				/>
			</FormGroup>
		</div>
	);
};
