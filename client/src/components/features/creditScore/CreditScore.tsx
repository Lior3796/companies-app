import React, { useState, useEffect, FC } from "react";
import "./creditScore.css";
import { ApproveButton } from "../approveButton/ApproveButton";
import { DeclineButton } from "../declineButton/DeclineButton";
import { useThemeStyle } from "../../../hooks/useThemeStyle";
interface Props {
	score: Number;
}

export const CreditScore: FC<Props> = ({ score }) => {
	const [theme, creditScoreRate] = useThemeStyle(score);

	return (
		<div className="creditScore-container">
			<div className={`${theme} score`}>
				<h3 className="rate">{creditScoreRate}</h3>
			</div>
			<div className="btn-container">
				<ApproveButton />
				<DeclineButton />
			</div>
		</div>
	);
};
