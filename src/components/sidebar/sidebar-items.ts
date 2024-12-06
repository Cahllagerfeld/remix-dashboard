import { LinkProps, useParams } from "@tanstack/react-router";
import { HomeIcon, LucideIcon, ServerIcon } from "lucide-react";

export type SidebarItem = {
	title: string;
	icon: LucideIcon;
	url: LinkProps;
	isActive?: boolean;
	items?: {
		title: string;
		url: LinkProps;
	}[];
};

export function useMainItems(): SidebarItem[] {
	const { workspace_id } = useParams({ from: "/(private)/$workspace_id" });

	return [
		{
			title: "Home",
			url: {
				to: "/$workspace_id",
				params: { workspace_id },
			},
			icon: HomeIcon,
		},
		{
			title: "Infrastructure",
			url: {
				to: "/$workspace_id/pipelining",
			},
			items: [
				{
					title: "Components",
					url: {
						to: "/$workspace_id/components",
						params: { workspace_id },
					},
				},
			],
			icon: ServerIcon,
			isActive: true,
		},
	];
}
