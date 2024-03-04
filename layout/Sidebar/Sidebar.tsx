import { Menu } from '../Menu/Menu';
import { SidebarProps } from "./Sidebar.props";
import styles from "./sidebar.module.css";
import cn from "classnames";
import Logo from "../logo.svg";
import { Search } from '../../components';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className)} {...props}>
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};

