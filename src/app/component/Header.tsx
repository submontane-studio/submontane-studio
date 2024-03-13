import Image from "next/image";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Open } from "./hamburger";

export default function Header() {
  return (
    <header className="header">
      <Open />
      <Logo>
        <Image
          src="/images/mobile/common/header/logo.svg"
          width={125}
          height={12}
          alt={process.env.SITE_TITLE ?? ""}
        />
      </Logo>
      <Navigation />
    </header>
  );
}
