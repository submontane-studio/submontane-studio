import Image from "next/image";
import Logo from "./Logo";
import Navigation from "./Navigation/Navigation";
import Observer from "./Observer";
import { Open } from "./hamburger";

export default function Header() {
  return (
    <>
      <Observer initialInView={true} classNameInView="is-fixed">
        <header id="js-header" className="header">
          <Open />
          <Logo>
            <Image
              src="/images/mobile/common/header/logo.svg"
              width={149}
              height={11}
              alt={process.env.SITE_TITLE ?? ""}
            />
          </Logo>
          <Navigation />
        </header>
      </Observer>
    </>
  );
}
