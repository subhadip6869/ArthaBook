interface RadioType<T> {
	current: T;
	items: Array<{ value: T; label: string }>;
	onClick: (v: T) => void;
}

export default function RadioButton<T>({
	current,
	items,
	onClick,
}: RadioType<T>) {
	return (
		<div className="border border-line inline-flex rounded bg-surface">
			{items.map(({ value, label }, index) => (
				<button
					key={index}
					className={`cursor-pointer py-2 px-4 rounded ${current === value ? "bg-primary text-on-primary" : ""}`}
					onClick={() => onClick(value)}
				>
					{label}
				</button>
			))}
		</div>
	);
}
