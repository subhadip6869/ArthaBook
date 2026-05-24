interface ModalProps {
	open: boolean;
	title: string;
	message: string;
	onClose: () => void;
	onConfirm?: () => void;
	confirmText?: string;
	cancelText?: string;
}

export function Modal({
	open,
	title,
	message,
	onClose,
	onConfirm,
	confirmText = "OK",
	cancelText = "Cancel",
}: ModalProps) {
	if (!open) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
			<div className="w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl">
				<h2 className="text-2xl font-semibold">{title}</h2>

				<p className="mt-3 text-medium-gray">{message}</p>

				<div className="mt-6 flex justify-end gap-3">
					<button
						onClick={onClose}
						className="rounded-lg border px-4 py-2 hover:bg-gray-100 transition-colors"
					>
						{cancelText}
					</button>

					<button
						onClick={onConfirm}
						className="rounded-lg bg-primary px-4 py-2 text-white hover:opacity-90 transition-opacity"
					>
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	);
}
