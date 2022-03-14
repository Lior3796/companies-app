import React, { FC, useState } from "react";
import { Search } from "../search/Search";
import { DropDown } from "../dropDown/DropDown";
import { PaginationPage } from "../pagination/PaginationPage";
import { useFetchMatches } from "../../../hooks/useFetchMatches";
import { LoaderPage } from "../loaderPage/LoaderPage";
import { Matches } from "../matches/Matches";
import Switch from "@mui/material/Switch";
import { AppProvider } from "../../../context/context";

interface ICounter {
	approve: Number;
	decline: Number;
}

export const Container: FC = () => {
	const [page, setPage] = useState<Number>(1);
	const [matches, setMatches] = useFetchMatches(page) || [];
	const [search, setSearch] = useState<string>("");
	const [removeItem, setRemoveItem] = useState<boolean>(false);

	const [theme, setTheme] = useState(false);
	const [filterChoice, setFilterChoice] = useState<string>("Company-name");
	const [counter, setCounter] = useState<ICounter>({ approve: 0, decline: 0 });

	const changeTheme = () => {
		document.body.style.background = theme ? "#FFF" : "#000";
		setTheme(!theme);
	};

	return (
		<AppProvider
			value={{
				page,
				setPage,
				matches,
				setMatches,
				filterChoice,
				setFilterChoice,
				counter,
				setCounter,
				setTheme,
				theme,
				search,
				setSearch,
				removeItem,
				setRemoveItem,
			}}
		>
			<main className={`app-container ${theme && "dark"}`}>
				<h1 className="app-header">Matches List</h1>
				<Switch onChange={() => changeTheme()} name="loading" color="primary" />

				<DropDown />
				<Search search={search} setSearch={setSearch} />
				{matches ? <Matches /> : <LoaderPage />}

				<PaginationPage />
			</main>
		</AppProvider>
	);
};
