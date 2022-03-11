import React, { FC, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { filterByLabel } from "../../../utililties/filterSearch";
import { UseAppContext } from "../../../context/context";
import { blue } from "@mui/material/colors";
import { Match } from "../../../types/types";

interface PropsMatches {
	matches: Match[];
}

interface IOption {
	value: string;
	click: boolean;
}

export const SelectLables: FC = () => {
	const { setMatches, matches, theme } = UseAppContext();
	const [checkboxState, setCheckboxState] = useState([
		{ click: false, value: "Decline" },
		{ click: false, value: "Open" },
		{ click: false, value: "Possible" },
		{ click: false, value: "Close" },
	]);

	const setOptionToCheckbox = async (option: IOption) => {
		let newMatch = checkboxState
			.filter((item) => item.value === option.value)
			.map((item) => {
				return { ...item, click: !item.click };
			});
		const newMatches = checkboxState.filter(
			(item) => item.value !== option.value
		);
		newMatch = newMatch.concat(newMatches);

		const filterdMatches = await filterByLabel(matches, newMatch);

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
				{checkboxState.map(
					(item: any): JSX.Element => (
						<FormControlLabel
							key={item.value}
							onClick={() => setOptionToCheckbox(item)}
							control={
								<Checkbox {...label} color="secondary" sx={checkboxStyle} />
							}
							label={item.value}
						/>
					)
				)}
			</FormGroup>
		</div>
	);
};
