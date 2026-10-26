import type { ReactNode } from "react";

export function Card({
	children,
	className,
	as: Tag = "section",
	padded = true,
	...rest
}: {
	children: ReactNode;
	className?: string;
	as?: "section" | "div" | "article";
	padded?: boolean;
	"aria-label"?: string;
	"aria-labelledby"?: string;
}) {
	return (
		<Tag
			className={`min-w-0 rounded-lg border border-line bg-surface shadow-e1 ${padded && "p-4 sm:p-5"} ${className}`}
			{...rest}
		>
			{children}
		</Tag>
	);
}
