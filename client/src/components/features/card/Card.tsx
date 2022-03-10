import React, { FC } from "react";
import { CreditScore } from "../creditScore/CreditScore";
import { KeyProvider, UseAppContext } from "../../../context/context";
import { Match } from "../../../api";

interface CardProps {
	card: Match;
}

export const Card: FC<CardProps> = ({ card }) => {
	const { theme } = UseAppContext();
	const { companyName, id, amountReq } = card;
	const { firstName, lastName, email } = card.borrower.user;
	const { creditScore } = card.borrower;
	return (
		<KeyProvider value={{ id }}>
			<li key={id} className={`card-li ${theme && "dark"}`}>
				<CreditScore score={creditScore} />
				<h5 className="title">{companyName}</h5>
				<div className="matchData">
					<div>
						<p className="userDate">
							<b>Full Name:</b> {firstName}
							{lastName}
						</p>
						<p className="userDate">
							<b>Email:</b> {email}
						</p>
						<p className="userDate">
							<b>Amount Request: </b> {amountReq}
						</p>
						<p className="userDate">
							<b>Balance: </b> {card.borrower.financeData.balance}
							{card.borrower.financeData.currency}
						</p>
						<p className="userDate">
							<b>Credit Score: </b>
							{creditScore}$
						</p>
					</div>
				</div>
				<footer>
					<div className="meta-data">
						Created At {new Date(card.creationTime).toLocaleString()}
					</div>
				</footer>
			</li>
		</KeyProvider>
	);
};
