import React, { FC } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { filterByLabel } from "../../../utililties/filterSearch";
import { UseAppContext } from "../../../context/context";
import { blue } from "@mui/material/colors";
import { Match } from "../../../types/types";
import { useState } from "react";

interface PropsMatches {
	matches: Match[];
}

interface IOption {
	value: string;
	click: boolean;
}

export const SelectLables: FC = () => {
	const { setMatches, matches, theme } = UseAppContext();
	const [checkboxState, setCheckboxState] = useState({
		Decline: false,
		Open: false,
		Possible: false,
		Close: false,
	});
	const setOptionToCheckbox = (option: IOption) => {
		const filterdMatches = filterByLabel(matches, option.value);
		setMatches(filterdMatches);
	};

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
					onClick={() =>
						setOptionToCheckbox({ value: "Decline", click: false })
					}
					control={<Checkbox {...label} color="secondary" sx={checkboxStyle} />}
					label="Decline"
				/>
				<FormControlLabel
					onClick={() =>
						setOptionToCheckbox({ value: "Possible", click: false })
					}
					control={<Checkbox {...label} color="secondary" sx={checkboxStyle} />}
					label="Possible"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox({ value: "Open", click: false })}
					control={<Checkbox {...label} color="secondary" sx={checkboxStyle} />}
					label="Open"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox({ value: "Close", click: false })}
					control={<Checkbox {...label} color="secondary" sx={checkboxStyle} />}
					label="Close"
				/>
			</FormGroup>
		</div>
	);
};
