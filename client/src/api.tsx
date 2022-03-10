import axios from "axios";
export type Match = {
	id: string;
	creationTime: number;
	companyName: string;
	amountReq: number;
	borrower: {
		bankruptcy: boolean;
		creditScore: number;
		ssn: number;
		financeData: {
			number: string;
			balance: number;
			currency: string;
		};
		user: {
			firstName: string;
			lastName: string;
			email: string;
			phoneNumber: string;
			state: string;
			userIp: string;
		};
	};
	labels?: string[];
};

// services

export const createApiClient = (page: Number): Promise<Array<Match> | void> => {
	const matches = axios
		.get(`http://localhost:8888/api/match/${page}`)
		.then((res): Match[] => res.data)
		.catch((err): void => console.log(err));
	console.log(matches);
	return matches;
};
