import React, { FC } from "react";
import { Card } from "../card/Card";
import { Match } from "../../../api";
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
	search: string;
}

type Selection = {
	"Company-Name": Array<Match>;
	"Full Name": Array<Match>;
	"Credit Score": Array<Match>;
	Balance: Array<Match>;
	Email: Array<Match>;
	Amount: Array<Match>;
	default: Array<Match>;
};

// Add flow to change Matches by filter checkbox - Next step

export const Matches: FC<PropsMatches> = ({
	matches,
	search,
}: {
	matches: Match[];
	search: string;
}) => {
	const { filterChoice, setFilterChoice, theme } = UseAppContext();

	const checkUserChoice = () => {
		switch (filterChoice) {
			case "Company-Name":
				return filterByCompanyName(matches, search);

			case "Full Name":
				return filteredByFullName(matches, search);

			case "Balance":
				return filterByBalance(matches, search);

			case "Credit Score":
				return filterByCreditScore(matches, search);

			case "Email":
				return filterByEmail(matches, search);

			case "Amount":
				return filterByAmountReq(matches, search);

			default:
				return filterByCompanyName(matches, search);
		}
	};

	return (
		<ul className={`matches-container `}>
			<div className={`matches-results-number `}>
				Showing {matches.length} results
			</div>

			{checkUserChoice().map((match) => (
				<Card card={match} />
			))}
		</ul>
	);
};
