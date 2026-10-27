import { CgSpinnerTwo } from "react-icons/cg";
import logoWhite from "../../assets/logo_white.png";

export interface LoaderProps {
	/**
	 * Whether the loader should fill the full viewport or fit its container.
	 * @default true
	 */
	fullScreen?: boolean;
	/**
	 * Optional message to display under the loader (e.g. "Loading...", "Verifying session...").
	 */
	message?: string;
	/**
	 * Whether to display the ArthaBook logo and branding.
	 * @default true
	 */
	showLogo?: boolean;
	/**
	 * Size variant for the loader presentation.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * Additional CSS classes to apply to the root container.
	 */
	className?: string;
}

const sizeConfig = {
	sm: {
		ring: "w-14 h-14",
		emblem: "w-8 h-8 rounded-xl",
		logoImg: "w-5 h-5",
		title: "text-xl",
		tagline: "text-[0.55rem] tracking-[0.4ch]",
		spinnerIconSize: 14,
	},
	md: {
		ring: "w-20 h-20",
		emblem: "w-12 h-12 rounded-xl",
		logoImg: "w-7 h-7",
		title: "text-2xl",
		tagline: "text-[0.625rem] tracking-[0.5ch]",
		spinnerIconSize: 16,
	},
	lg: {
		ring: "w-24 h-24",
		emblem: "w-14 h-14 rounded-2xl",
		logoImg: "w-9 h-9",
		title: "text-3xl",
		tagline: "text-[0.65rem] tracking-[0.55ch]",
		spinnerIconSize: 18,
	},
};

export function Loader({
	fullScreen = true,
	message,
	showLogo = true,
	size = "md",
	className = "",
}: LoaderProps) {
	const config = sizeConfig[size];

	const containerClasses = fullScreen
		? `relative min-h-screen w-full flex flex-col items-center justify-center bg-bg text-ink p-4 overflow-hidden select-none ${className}`
		: `relative w-full min-h-48 flex flex-col items-center justify-center bg-transparent text-ink p-4 select-none ${className}`;

	return (
		<div role="status" aria-live="polite" className={containerClasses}>
			{/* Ambient background glow (rendered for full screen or large loaders) */}
			{fullScreen && (
				<div
					aria-hidden="true"
					className="absolute w-72 h-72 rounded-full bg-accent/10 dark:bg-accent/5 blur-3xl pointer-events-none -translate-y-6"
				/>
			)}

			{showLogo ? (
				<>
					{/* Logo emblem with spinning accent ring */}
					<div
						className={`relative flex items-center justify-center ${config.ring} mb-4`}
					>
						{/* Ambient aura */}
						<div
							aria-hidden="true"
							className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-pulse"
						/>

						{/* Spinning accent track ring */}
						<div
							aria-hidden="true"
							className="absolute inset-0 rounded-full border-2 border-line/50 border-t-accent border-r-accent/40 animate-spin"
						/>

						{/* Center brand emblem */}
						<div
							className={`relative ${config.emblem} bg-[#0D2B1F] dark:bg-[#111B16] border border-[#26382F] flex items-center justify-center shadow-e3`}
						>
							<img
								src={logoWhite}
								alt="ArthaBook logo"
								className={`${config.logoImg} object-contain`}
							/>
						</div>
					</div>

					{/* Brand typography */}
					<div className="text-center">
						<div
							className={`font-display font-semibold tracking-wide text-ink ${config.title}`}
						>
							<span>Artha</span>
							<span className="text-accent">Book</span>
						</div>
						<p
							className={`uppercase text-muted font-bold mt-0.5 ${config.tagline}`}
						>
							Wealth, Accounted.
						</p>
					</div>
				</>
			) : (
				/* Minimal spinner when logo is disabled */
				<div className={`relative flex items-center justify-center ${config.ring}`}>
					<div
						aria-hidden="true"
						className="absolute inset-0 rounded-full border-2 border-line/40 border-t-accent border-r-accent/40 animate-spin"
					/>
					<CgSpinnerTwo
						className="animate-spin text-accent"
						size={config.spinnerIconSize + 6}
					/>
				</div>
			)}

			{/* Status pill badge */}
			{message && (
				<div className="flex items-center gap-2.5 mt-5 px-4 py-1.5 rounded-full bg-surface border border-line shadow-e1">
					<CgSpinnerTwo
						className="animate-spin text-accent shrink-0"
						size={config.spinnerIconSize}
					/>
					<span className="text-xs font-medium text-muted tracking-wide">
						{message}
					</span>
				</div>
			)}

			<span className="sr-only">{message || "Loading ArthaBook..."}</span>
		</div>
	);
}

export default Loader;

