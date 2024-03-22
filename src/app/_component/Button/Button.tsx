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

export function ButtonWhite({ label = "詳しくはこちら", url = "/" }) {
  return (
    <p className={`${styles.button} ${styles.white}`}>
      <Link href={url}>{label}</Link>
    </p>
  );
}
