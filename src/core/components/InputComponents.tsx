import type React from "react";

export function Field({
	label,
	labelFor,
	className,
	children,
}: {
	label: string;
	labelFor?: string;
	className?: string;
	children: React.ReactElement;
}) {
	return (
		<div className={`flex flex-col mb-3 ${className || ""}`}>
			<label htmlFor={labelFor} className="text-sm mb-1">
				{label}
			</label>
			{children}
		</div>
	);
}

export function Input(
	props: React.InputHTMLAttributes<HTMLInputElement> & { className?: string },
) {
	return (
		<input
			{...props}
			className={`px-3 py-2 w-full bg-secondary rounded-sm border-2 border-medium-gray/30 focus:outline-none focus:border-primary/60 transition-colors text-sm ${props.className || ""}`}
		/>
	);
}
