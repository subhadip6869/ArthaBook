import type { ReactElement } from "react";
import type { IconType } from "react-icons";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import {
	MdAccountBalanceWallet,
	MdOutlineAccountBalanceWallet,
	MdOutlineReceiptLong,
	MdOutlineSpaceDashboard,
	MdOutlineSummarize,
	MdReceiptLong,
	MdSpaceDashboard,
	MdSummarize,
} from "react-icons/md";

export interface NavItem {
	to: string;
	label: string;
	icon: ReactElement<IconType>;
	activeIcon?: ReactElement<IconType>;
	end?: boolean;
	/** Shown in the mobile bottom bar (max 4 + "More"). */
	primary: boolean;
}

export const NAV: NavItem[] = [
	{
		to: "/dashboard",
		label: "Overview",
		icon: <MdOutlineSpaceDashboard size={20} />,
		activeIcon: <MdSpaceDashboard size={20} className="text-[#E8A020]" />,
		end: true,
		primary: true,
	},
	{
		to: "/finance",
		label: "Finance",
		icon: <MdOutlineAccountBalanceWallet size={20} />,
		activeIcon: (
			<MdAccountBalanceWallet size={20} className="text-[#E8A020]" />
		),
		primary: true,
	},
	{
		to: "/transactions",
		label: "Transactions",
		icon: <MdOutlineReceiptLong size={20} />,
		activeIcon: <MdReceiptLong size={20} className="text-[#E8A020]" />,
		primary: true,
	},
	/* {
		to: "/planning",
		label: "Planning",
		icon: <BiCalendarEvent size={20} />,
		activeIcon: <BiSolidCalendar size={20} className="text-[#E8A020]" />,
		primary: true,
	}, */
	{
		to: "/reports",
		label: "Reports",
		icon: <MdOutlineSummarize size={20} />,
		activeIcon: <MdSummarize size={20} className="text-[#E8A020]" />,
		primary: false,
	},
	/* {
		to: "/notifications",
		label: "Notifications",
		icon: <MdOutlineNotifications size={20} />,
		activeIcon: <MdNotifications size={20} className="text-[#E8A020]" />,
		primary: false,
	}, */
	{
		to: "/settings",
		label: "Settings",
		icon: <IoSettingsOutline size={20} />,
		activeIcon: <IoSettings size={20} className="text-[#E8A020]" />,
		primary: false,
	},
];
