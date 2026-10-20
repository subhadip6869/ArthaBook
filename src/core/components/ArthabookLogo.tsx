import logoWhite from "../../assets/logo_white.png";

export default function ArthabookLogo({ size = 40 }: { size?: number }) {
	return (
		<div className="flex items-center gap-1.5 text-white">
			<div>
				<img
					src={logoWhite}
					alt="arthabook logo"
					width={size}
					height={size}
					className="bg-[#111B16] rounded-xl"
				/>
			</div>

			<div>
				<div className="font-display text-xl">
					<span>Artha</span>
					<span className="text-accent">Book</span>
				</div>
				<div className="text-[.5rem] uppercase tracking-[0.7ch] text-[#A7B3AC] font-extrabold">
					<span>Wealth, Accounted.</span>
				</div>
			</div>
		</div>
	);
}
