import { useState, useEffect } from "react";
import { Match } from "../api";

interface Iaction {
	type: string;
	payload: string | Number | Array<string> | Object;
}

const Matches = (matches: Array<Match>, action: Iaction) => {
	switch (action.type) {
		case "remove":
	}
};
