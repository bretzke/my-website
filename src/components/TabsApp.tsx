"use client";
import { routesPath } from "@/utils/path";
import { useLocale, useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { type ReactNode, useMemo } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface TabsAppProps {
	children: ReactNode;
}

interface MenuOptionProps {
	label: string;
	path: string;
}

export function TabsApp({ children }: TabsAppProps) {
	const locale = useLocale() as "pt" | "en";
	const { post } = useParams();
	const currentPath = usePathname();
	const translate = useTranslations("tabs");

	const menuOptions = useMemo(
		() =>
			[
				{
					label: translate("posts"),
					path: routesPath.home(locale),
				},
				{
					label: translate("about"),
					path: routesPath.about(locale),
				},
				{
					label: translate("projects"),
					path: routesPath.projects(locale),
				},
				{
					label: "Blog",
					path: routesPath.blog(locale),
				},
				{
					label: translate("feedbacks"),
					path: routesPath.feedbacks(locale),
				},
			] as MenuOptionProps[],
		[locale, translate],
	);

	if (post) {
		return children;
	}

	return (
		<main>
			<div className="container-app flex">
				{menuOptions.map((option) => {
					const selected = currentPath === option.path;

					return (
						<Link
							href={option.path}
							passHref
							key={option.path}
							className="grow max-sm:px-1 py-0 text-foreground"
						>
							<Button
								variant="ghost"
								className={`w-full ${
									selected ? "hover:bg-transparent" : "hover:bg-background"
								}`}
							>
								<span
									className={`border-y-4 h-10 flex items-center border-y-transparent ${
										selected && "border-b-primary"
									}`}
								>
									{option.label}
								</span>
							</Button>
						</Link>
					);
				})}
			</div>
			<div className="py-4">{children}</div>
		</main>
	);
}
