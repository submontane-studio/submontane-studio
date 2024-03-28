import Link from "next/link";
import styles from "./button.module.scss";

export function Contact({ label = "お問い合わせ", isNav = true } = {}) {
  return (
    <p
      className={`${styles.button} ${styles.contact} ${
        isNav && styles["is-nav"]
      }`}
    >
      <Link href="/contact">{label}</Link>
    </p>
  );
}

export function Button({
  label = "詳しくはこちら",
  url = "/",
  buttonName,
}: { label?: string; url?: string; buttonName: string }) {
  return (
    <p className={`${buttonName} ${styles.button} ${styles.normal}`}>
      <Link href={url}>{label}</Link>
    </p>
  );
}

export function ButtonWhite({ label = "詳しくはこちら", url = "/" }) {
  return (
    <p className={`${styles.button} ${styles.white}`}>
      <Link href={url}>{label}</Link>
    </p>
  );
}
