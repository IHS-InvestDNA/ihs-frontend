import {
	ClipboardListIcon,
	CogIcon,
	IdentificationIcon,
	LogoutIcon,
	TemplateIcon, UserGroupIcon,
	UsersIcon
} from "@heroicons/react/outline";

export const links = [
			{
				title: "dashboard",
				path: "dashboard",
				icon: <TemplateIcon  className="w-6" />,
			},
			{
				title: "beneficiaries",
				path: "beneficiaries",
				icon: <UsersIcon  className=" w-6" />,
			},
			{
				title: "appointments",
				path: "appointments",
				icon: <ClipboardListIcon  className="w-6" />,
			},
			{
				title: "users",
				path: "users",
				icon: <UserGroupIcon  className="w-6" />,
			},
			{
				title: "health workers",
				path: "healthworkers",
				icon: <IdentificationIcon  className="w-6" />,
			}

];

export const footerLinks = [
	{
		title: "profile",
		path: "profile",
		icon: <CogIcon  className="w-6" />,
	},
	{
		title: "logout",
		path: "logout",
		icon: <LogoutIcon  className=" w-6" />,
	},
];