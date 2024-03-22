import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="logo">
        <Link href="/">
          <Image
            src="/images/mobile/common/footer/logo.svg"
            width={211}
            height={15}
            alt="SUBMONTANE STUDIO"
          />
        </Link>
      </p>
      <p className="copyright">
        <small>&copy; 2024 SUBMONTANE STUDIO</small>
      </p>
    </footer>
  );
}
