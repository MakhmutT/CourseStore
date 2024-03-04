import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useSearch } from './Search.model';
import GlassIcon from "./glass.svg";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const {
		search,
		handleChangeSearch,
		goToSearch,
		handleKeyDown
	} = useSearch();

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={search}
				onChange={(e) => handleChangeSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance='primary'
				className={styles.button}
				onClick={goToSearch}
			>
				<GlassIcon />
			</Button>
		</div>
	);
};

