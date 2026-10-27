import { useEffect, useRef, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router";
import ArthabookLogo from "../core/components/ArthabookLogo";
import { logoutCurrentUser } from "../features/auth/data/services/authService";
import { useUser } from "../features/profile/data/hooks/useUser";
import { NAV, type NavItem } from "../routes/nav";

function SidebarLink({ item }: { item: NavItem }) {
	return (
		<>
			<NavLink
				to={item.to}
				end={item.end}
				title={item.label}
				className={({ isActive }) =>
					`text-[#E9E4D6] ${isActive ? "font-semibold bg-white/10" : ""} flex gap-1.5 items-center min-h-11 px-1 hover:bg-white/10 transition-colors rounded-md`
				}
			>
				{({ isActive }) => (
					<>
						{isActive ? (
							<span
								aria-hidden="true"
								className="w-1 h-[3ch] shrink-0 rounded-r bg-[#E8A020]"
							/>
						) : null}
						<span className="shrink-0">
							{isActive ? item.activeIcon : item.icon}
						</span>
						<span className="min-w-0 flex-1 truncate">
							{item.label}
						</span>
					</>
				)}
			</NavLink>
		</>
	);
}

function UserBlock() {
	const navigate = useNavigate();
	const { state: userState } = useUser();

	async function handleLogout() {
		try {
			await logoutCurrentUser();
			navigate("/auth");
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="flex justify-between text-white gap-1">
			<div className="flex flex-col min-w-0 flex-1">
				<p className="truncate" title={userState.user?.fullName}>
					{userState.user?.fullName}
				</p>
				<p
					className="truncate text-muted"
					title={userState.user?.email}
				>
					{userState.user?.email}
				</p>
			</div>
			<button
				className="cursor-pointer"
				onClick={handleLogout}
				title="Sign out"
			>
				<MdLogout size={20} />
			</button>
		</div>
	);
}

function Drawer({ open, onClose }: { open: boolean; onClose: () => void }) {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const d = ref.current;
		if (!d) return;
		if (open && !d.open) d.showModal();
		if (!open && d.open) d.close();
	}, [open]);

	return (
		<dialog
			ref={ref}
			aria-label="Main navigation"
			onCancel={(e) => {
				e.preventDefault();
				onClose();
			}}
			onMouseDown={(e) => {
				if (e.target === ref.current) onClose();
			}}
			className="fixed inset-y-0 left-0 m-0 mr-auto h-dvh max-h-none w-[84%] max-w-xs overflow-hidden border-0 bg-[#0D2B1F] p-0 text-[#E9E4D6] shadow-e3 open:flex open:flex-col open:animate-[ab-drawer_.2s_ease-out] backdrop:bg-(--ab-scrim) dark:bg-[#0A0F0D]"
		>
			<div className="flex items-center justify-between px-4 pb-2 pt-4">
				{/* <Wordmark onDark /> */}
				<ArthabookLogo />
			</div>
			<nav
				aria-label="Primary"
				className="flex-1 space-y-1 overflow-y-auto px-3 py-3"
			>
				{NAV.map((item) => (
					<NavLink
						key={item.to}
						to={item.to}
						end={item.end}
						onClick={onClose}
						className={({ isActive }) =>
							`relative flex min-h-12 items-center gap-3 rounded-md px-3 hover:bg-white/10 ${isActive && "bg-white/10 font-semibold text-white"}`
						}
					>
						{({ isActive }) => (
							<>
								{isActive ? (
									<span
										aria-hidden="true"
										className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-[#E8A020]"
									/>
								) : null}
								{isActive ? item.activeIcon : item.icon}
								{item.label}
							</>
						)}
					</NavLink>
				))}
			</nav>
			<div className="safe-bottom space-y-1 border-t border-white/10 p-3">
				<UserBlock />
			</div>
		</dialog>
	);
}

export function AppLayout() {
	const [drawer, setDrawer] = useState(false);

	return (
		<div className="flex md:pl-64">
			<Drawer open={drawer} onClose={() => setDrawer(false)} />

			<aside className="fixed inset-y-0 left-0 z-30 hidden md:flex flex-col w-64 bg-[#0D2B1F] px-2 dark:border-r dark:border-line dark:bg-[#0A0F0D] justify-between">
				<div className="space-y-3">
					<div className="flex items-center justify-between px-4 pb-2 pt-4">
						{/* <Wordmark onDark /> */}
						<ArthabookLogo />
					</div>
					<nav className="flex flex-col space-y-1">
						{NAV.map((e) => (
							<SidebarLink key={e.to} item={e} />
						))}
					</nav>
				</div>
				<div className="space-y-1 border-t border-white/10 p-3">
					<UserBlock />
				</div>
			</aside>

			<main className="flex flex-col grow">
				<header className="sticky border-b border-line p-2 w-full">
					<div className="flex mx-auto justify-between h-10 items-center">
						<div className="flex md:hidden items-center space-x-1">
							<button
								className="cursor-pointer"
								onClick={() => setDrawer(true)}
							>
								<HiMenuAlt2 size={24} />
							</button>
							<ArthabookLogo onDark={false} />
						</div>
						{/* <span>arthabook</span> */}
					</div>
				</header>

				<Outlet />
			</main>
		</div>
	);
}
