import axios from "axios";
import { Match } from "./types/types";

// services

export const createApiClient = (page: Number): Promise<Array<Match> | void> => {
	const matches = axios
		.get(`http://localhost:3000/data?_page=${page}&_limit=5`)
		.then((res): Match[] => res.data)
		.catch((err): void => console.log(err));

	return matches;
};
