"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Logo({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const current: string = usePathname();

	return current === "/" ? (
		<h1>{children}</h1>
	) : (
		<p>
			<Link href="/">{children}</Link>
		</p>
	);
}
