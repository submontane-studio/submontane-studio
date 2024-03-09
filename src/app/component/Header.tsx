import Image from "next/image";
import { Open } from "./Hamburger";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <Open />
      <Logo>
        <Image
          src="/images/mobile/common/header/logo.svg"
          width={186}
          height={12}
          alt={process.env.SITE_TITLE ?? ""}
        />
      </Logo>
      <Navigation />
    </header>
  );
}
