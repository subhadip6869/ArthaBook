import logo from "../../../../assets/arthabook.png";

type LogoPanelProps = {
	size?: number;
	className?: string;
};

const taglines = [
	"Track NSC, KVP, FD, MF, Stocks & more",
	"Monitor maturity dates & returns",
	"Export reports in PDF, Excel & CSV",
];

export function LogoPanel({ size = 46, className = "" }: LogoPanelProps) {
	return (
		<div
			className={`bg-secondary flex flex-col justify-center items-center ${className}`}
		>
			<img
				src={logo}
				alt="arthabook-logo"
				width={size}
				height={size}
				style={{ scale: 1.4 }}
			/>

			<h1 className="text-3xl font-semibold text-center">
				<span className="text-primary">Artha</span>
				<span className="text-emerald-green">Book</span>
			</h1>
			<p className="text-sm text-center text-medium-gray/80">
				Your wealth. Your purpose. Your ledger.
			</p>

			<ul className="text-sm mt-12">
				{taglines.map((tag, index) => (
					<li key={index} className="flex gap-3 items-center">
						<span className="h-1.5 w-1.5 rounded-full bg-primary-hover" />
						{tag}
					</li>
				))}
			</ul>
		</div>
	);
}
