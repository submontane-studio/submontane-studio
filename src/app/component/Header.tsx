import Image from "next/image";

export default function Header() {
	return (
		<header>
			<h1>
				<Image
					src="/images/common/header/logo.svg"
					width={315}
					height={32}
					alt={process.env.SITE_TITLE ?? ""}
				/>
			</h1>
		</header>
	);
}
