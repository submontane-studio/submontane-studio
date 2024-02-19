import Image from "next/image";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Hamburger from "./hamburger";

export default function Header() {
  return (
    <header className="header">
      <Hamburger />
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
