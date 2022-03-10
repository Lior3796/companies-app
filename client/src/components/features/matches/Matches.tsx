import React, { FC, useEffect, useMemo, useState } from "react";
import { Card } from "../card/Card";
import { Match } from "../../../types/types";
import { UseAppContext } from "../../../context/context";
import {
	filteredByFullName,
	filterByCompanyName,
	filterByEmail,
	filterByAmountReq,
	filterByBalance,
	filterByCreditScore,
} from "../../../utililties/filterSearch";

interface PropsMatches {
	matches: Match[];
}

// Add flow to change Matches by filter checkbox - Next step

export const Matches: FC = () => {
	const { matches, filterChoice, search } = UseAppContext();
	const [searchMatches, setSearchMatches] = useState<Match[]>(matches);

	const checkUserChoice = () => {
		let newMatches;
		switch (filterChoice) {
			case "Company-name":
				newMatches = filterByCompanyName(matches, search);
				setSearchMatches(newMatches);
				return;
			case "Full Name":
				newMatches = filteredByFullName(matches, search);
				setSearchMatches(newMatches);
				return;
			case "Balance":
				newMatches = filterByBalance(matches, search);
				setSearchMatches(filterByBalance(matches, search));
				return;
			case "Credit Score":
				newMatches = filterByCreditScore(matches, search);
				setSearchMatches(newMatches);
				return;
			case "Email":
				setSearchMatches(filterByEmail(matches, search));
				return;
			case "Amount":
				newMatches = filterByAmountReq(matches, search);
				setSearchMatches(newMatches);
				return;
			default:
				setSearchMatches(filterByCompanyName(matches, search));
		}
	};

	useEffect(() => {
		checkUserChoice();
	}, [matches, search]);

	const memoMatches = useMemo(
		() => searchMatches?.map((match) => <Card card={match} />),
		[searchMatches]
	);
	return (
		<ul className={`matches-container `}>
			<div className={`matches-results-number `}>
				Showing {matches?.length} results
			</div>
			{memoMatches}
		</ul>
	);
};
