import type { ReactNode } from "react";
import type { Crumb } from "./Breadcrumbs";
import Breadcrumbs from "./Breadcrumbs";

export function PageHeader({
	title,
	description,
	actions,
	crumbs,
}: {
	title: string;
	description?: ReactNode;
	actions?: ReactNode;
	crumbs?: Crumb[];
}) {
	return (
		<header className="mb-5 sm:mb-6">
			{crumbs && crumbs.length > 1 ? (
				<Breadcrumbs items={crumbs} />
			) : null}
			<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
				<div className="min-w-0">
					<h1 className="font-display text-[2rem] font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
						{title}
					</h1>
					{description ? (
						<p className="mt-1 max-w-2xl text-[15px] text-muted">
							{description}
						</p>
					) : null}
				</div>
				{actions ? (
					<div className="flex flex-wrap items-center gap-2">
						{actions}
					</div>
				) : null}
			</div>
		</header>
	);
}
