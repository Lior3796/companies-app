import React, { useState } from "react";
import { UseAppContext } from "../../../context/context";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SelectLables } from "../selectLables/SelectLables";

export const DropDown = () => {
	const [userChoice, setUserChoice] = useState<string>("");
	const { filterChoice, setFilterChoice, theme } = UseAppContext();

	const handleChange = (event: SelectChangeEvent<string>): void => {
		setUserChoice(event.target.value);
		setFilterChoice(event.target.value);
	};

	return (
		<div style={{ display: "flex" }}>
			<SelectLables />

			<div style={{ width: "50%", flex: 1 }}>
				<FormControl sx={{ m: 1, minWidth: "100%" }}>
					<InputLabel id="demo-simple-select-helper-label">
						{filterChoice}
					</InputLabel>
					<Select
						style={{ background: `${theme ? "white" : "inherit"}` }}
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={userChoice}
						label="userChoice"
						onChange={(event) => handleChange(event)}
					>
						<MenuItem value={"Music"}>Company-Name</MenuItem>
						<MenuItem value={"Full Name"}>Full Name</MenuItem>
						<MenuItem value={"Amount"}>Amount </MenuItem>
						<MenuItem value={"Balance"}>Balance</MenuItem>
						<MenuItem value={"Credit Score"}>Credit Score</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	);
};
