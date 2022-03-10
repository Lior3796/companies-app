import React, { useState, useEffect, FC } from "react";

export const useThemeStyle = (score: Number): Array<string> => {
	const [creditScoreRate, setCreditScoreRate] = useState("");
	const [theme, setTheme] = useState("");

	const setStylesValues = (credit: string, theme: string): void => {
		setCreditScoreRate(credit);
		setTheme(theme);
	};

	useEffect(() => {
		score <= 679
			? setStylesValues("B", "yellow-score")
			: setStylesValues("A", "green-score");
		score < 579 && setStylesValues("C", "red-score");
	}, [creditScoreRate, theme]);

	return [theme, creditScoreRate];
};
