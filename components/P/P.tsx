import { PProps } from "./p.props";
import styles from "./p.module.css";
import cn from "classnames";

export const P = ({ size = "M", children, className, ...props }: PProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, {
			[styles.S]: size === "S",
			[styles.M]: size === "M",
			[styles.L]: size === "L",
		})}
			{...props}
		>
			{children}
		</p>
	);
};

