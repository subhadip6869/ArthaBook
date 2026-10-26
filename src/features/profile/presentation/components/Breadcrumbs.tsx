import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router";

export interface Crumb {
	label: string;
	to?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
	return (
		<nav aria-label="Breadcrumb" className="mb-1">
			<ol className="flex flex-wrap items-center gap-x-1 text-sm text-muted">
				{items.map((c, i) => (
					<li key={i} className="flex items-center gap-1">
						{i > 0 ? (
							<MdChevronRight size={16} className="text-faint" />
						) : null}
						{c.to && i < items.length - 1 ? (
							<Link
								to={c.to}
								className="rounded px-0.5 hover:text-ink hover:underline"
							>
								{c.label}
							</Link>
						) : (
							<span
								aria-current={
									i === items.length - 1 ? "page" : undefined
								}
								className={
									i === items.length - 1 ? "text-ink" : ""
								}
							>
								{c.label}
							</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
