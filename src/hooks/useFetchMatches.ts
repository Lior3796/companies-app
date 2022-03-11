import React, { useState, useEffect } from "react";
import { createApiClient } from "../api";
import { Match } from "../types/types";

// Add flow to change Matches by filter checkbox

export const useFetchMatches = (page: Number): Array<Object | Match | void> => {
	const [matches, setMatches] = useState<Match[] | void>([]);

	const fetchMatches = async () => {
		const cardsFromServer: Array<Match> | void = await createApiClient(page);
		setMatches(cardsFromServer);
	};

	useEffect(() => {
		fetchMatches();
	}, [page]);

	return [matches, setMatches];
};
