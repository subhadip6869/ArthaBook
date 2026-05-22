import { CgSpinnerTwo } from "react-icons/cg";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
}

export function PrimaryButton({
	children,
	className,
	isLoading = false,
	disabled,
	...props
}: PrimaryButtonProps) {
	return (
		<button
			{...props}
			disabled={isLoading || disabled}
			className={`cursor-pointer bg-gradient-green hover:bg-emerald-green text-white py-2 px-4 rounded-sm flex justify-center transition-colors ${className || ""}`}
		>
			{isLoading ? (
				<CgSpinnerTwo className="animate-spin-pause" size={24} />
			) : (
				children
			)}
		</button>
	);
}
