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

export type AppState = {
	matches?: Match[];
	search: string;
};

export type ApiClient = {
	getMatches: () => Promise<Match[]>;
};
