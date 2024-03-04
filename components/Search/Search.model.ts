import { useRouter } from 'next/router';
import { KeyboardEvent, useState } from 'react';

export const useSearch = () => {
	const [search, setSearch] = useState<string>("");
	const router = useRouter();

	const handleChangeSearch = (value: string) => {
		setSearch(value);
	};

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			goToSearch();
		}
	};

	return {
		search,
		handleChangeSearch,
		goToSearch,
		handleKeyDown
	};
};