import type { ReactNode } from "react";

export default function SectionHeader({
	title,
	action,
	id,
	subtitle,
}: {
	title: string;
	action?: ReactNode;
	id?: string;
	subtitle?: string;
}) {
	return (
		<div className="mb-3 flex flex-wrap items-end justify-between gap-x-3 gap-y-2">
			<div className="min-w-0">
				<h2
					id={id}
					className="text-base font-semibold text-ink sm:text-lg"
				>
					{title}
				</h2>
				{subtitle ? (
					<p className="text-sm text-muted">{subtitle}</p>
				) : null}
			</div>
			{action}
		</div>
	);
}
