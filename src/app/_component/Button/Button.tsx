import Link from "next/link";
import styles from "./button.module.scss";

type ContactButtonProps = {
  label?: string;
  isNav?: boolean;
};

type ButtonProps = {
  label?: string;
  url?: string;
  buttonName: string;
  variant?: "normal" | "white";
};

export function Contact({
  label = "お問い合わせ",
  isNav = true,
}: ContactButtonProps) {
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
  variant = "normal",
}: ButtonProps) {
  const styleClass = variant === "white" ? styles.white : styles.normal;
  return (
    <p className={`${buttonName} ${styles.button} ${styleClass}`}>
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
