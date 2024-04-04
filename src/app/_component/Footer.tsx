import Image from "next/image";
import Link from "next/link";
import FooterNavigation from "./FooterNavigation";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="logo">
          <Link href="/">
            <Image
              src="/images/mobile/common/footer/logo.svg"
              width={210}
              height={16}
              alt="SUBMONTANE STUDIO"
            />
          </Link>
        </p>
        <FooterNavigation />
      </div>
      <p className="copyright">
        <small>&copy; 2024 SUBMONTANE STUDIO</small>
      </p>
    </footer>
  );
}
