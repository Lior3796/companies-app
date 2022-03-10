import React, { useState, useEffect } from "react";
import { createApiClient, Match } from "../api";

// Add flow to change Matches by filter checkbox

export const useFetchMatches = (page: Number): void | Match[] => {
	const [matches, setMatches] = useState<Match[] | void>([]);

	const fetchMatches = async () => {
		const cardsFromServer: Array<Match> | void = await createApiClient(page);
		setMatches(cardsFromServer);
	};

	useEffect(() => {
		fetchMatches();
	}, [page]);

	return matches;
};
