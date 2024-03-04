import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size?: "S" | "M";
	color?: "ghost" | "red" | "gray" | "green" | "primary";
	href?: string;
}