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
			<label htmlFor={labelFor} className="text-sm mb-1 font-medium">
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
			className={`w-full min-h-11 rounded-md border bg-[#FFFFFF] px-3 text-on-accent focus:outline-none focus:ring-2 focus:ring-muted focus:border-transparent border-line-strong ${props.className || ""}`}
		/>
	);
}
