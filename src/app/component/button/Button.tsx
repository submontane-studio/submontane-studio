import Link from "next/link";
import styles from "./Button.module.scss";

export function Contact(label = "お問い合わせ") {
  return (
    <p className={`${styles.button} ${styles.contact}`}>
      <Link href="/contact">お問い合わせ</Link>
    </p>
  );
}
