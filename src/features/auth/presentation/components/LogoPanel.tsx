import { IoReceiptOutline } from "react-icons/io5";
import {
	MdOutlineAccountBalance,
	MdOutlineEventAvailable,
} from "react-icons/md";
import ArthabookLogo from "../../../../core/components/ArthabookLogo";

type LogoPanelProps = {
	className?: string;
};

const taglines = [
	{
		icon: <MdOutlineAccountBalance className="text-accent" />,
		tagline: "Every FD, NSC, KVP, PPF, fund and share in one ledger",
	},
	{
		icon: <IoReceiptOutline className="text-accent" />,
		tagline: "Balances derived from your transactions, not retyped totals",
	},
	{
		icon: <MdOutlineEventAvailable className="text-accent" />,
		tagline: "Export reports in PDF, Excel & CSV",
	},
];

export function LogoPanel({ className = "" }: LogoPanelProps) {
	return (
		<div
			className={`flex flex-col justify-center items-start p-12 text-white ${className}`}
		>
			<ArthabookLogo />

			<p className="font-display text-5xl pt-12">
				A ledger for
				<br />
				everything you own.
			</p>

			<ul className="mt-14 flex flex-col gap-4">
				{taglines.map((tag, index) => (
					<li key={index} className="flex gap-3 items-center">
						{tag.icon}
						{tag.tagline}
					</li>
				))}
			</ul>
		</div>
	);
}
