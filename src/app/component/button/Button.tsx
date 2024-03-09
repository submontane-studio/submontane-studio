import Link from "next/link";
import styles from "./button.module.scss";

export function Contact({ label = "お問い合わせ" } = {}) {
  return (
    <p className={`${styles.button} ${styles.contact} ${styles["is-nav"]}`}>
      <Link href="/contact">{label}</Link>
    </p>
  );
}
