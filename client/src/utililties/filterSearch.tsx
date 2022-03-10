import { Match } from "../types/types";

export const filteredByFullName = (matches: Array<Match>, search: String) => {
	if (search.length <= 0) return matches;
	return matches.filter((t) => {
		return (
			(
				t.borrower.user.firstName.toLowerCase() +
				t.borrower.user.lastName.toLowerCase()
			).substring(0, search.length) === search.toLowerCase()
		);
	});
};

export const filterByCompanyName = (matches: Array<Match>, search: String) =>
	matches.filter((t) => {
		const { companyName } = t;

		if (search.length <= 0) return t;
		return (
			companyName.toLowerCase().substring(0, search.length) ===
			search.toLowerCase()
		);
	});

export const filterByEmail = (matches: Array<Match>, search: String) =>
	matches.filter((t) => {
		const { email } = t.borrower.user;
		if (search.length <= 0) return t;
		return email.substring(0, search.length) === search.toLowerCase();
	});

export const filterByAmountReq = (matches: Array<Match>, search: String) =>
	matches.filter((t) => {
		// Filter amount requset
		const amountReq = `${t.amountReq}`;
		if (search.length <= 0) return t;
		return amountReq.substring(0, search.length) === search.toLowerCase();
	});

export const filterByBalance = (matches: Array<Match>, search: String) =>
	matches.filter((t) => {
		// Filter amount requset
		const balance = `${t.borrower.financeData.balance}`;
		if (search.length <= 0) return t;
		return balance.substring(0, search.length) === search.toLowerCase();
	});

export const filterByCreditScore = (matches: Array<Match>, search: String) =>
	matches.filter((t) => {
		const creditScore = `${t.borrower.creditScore}`;
		if (search.length <= 0) return t;
		return creditScore.substring(0, search.length) === search.toLowerCase();
	});

export const filterByLabel = (
	matches: Array<Match>,
	label: string
): Array<Match> =>
	matches.filter((item: Match): boolean | undefined =>
		item.labels?.includes(label)
	);
