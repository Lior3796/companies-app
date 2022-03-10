import React, { FC } from "react";
import "../../../App.css";

interface ISearchProps {
	search: string;
	setSearch: React.SetStateAction<any>;
}

export const Search: FC<ISearchProps> = ({ setSearch }) => {
	const onSearch = (val: string) => {
		let searchDebounce;
		clearTimeout(searchDebounce);
		searchDebounce = setTimeout(() => {
			setSearch(val);
		}, 300);
	};
	return (
		<header className="search-container">
			<input
				className="search-input"
				type="search"
				placeholder="Search..."
				onChange={(e) => onSearch(e.target.value)}
			/>
		</header>
	);
};
