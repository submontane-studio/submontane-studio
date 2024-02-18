import Image from "next/image";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
	return (
		<header>
			<Logo>
				<Image
					src="/images/desktop/common/header/logo.svg"
					width={315}
					height={32}
					alt={process.env.SITE_TITLE ?? ""}
				/>
			</Logo>
			<Navigation />
		</header>
	);
}
