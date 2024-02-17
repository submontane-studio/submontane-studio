import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: `${process.env.SITE_TITLE}`,
		template: `%s | ${process.env.SITE_TITLE}`,
	},
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
