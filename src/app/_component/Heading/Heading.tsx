import { ReactNode } from "react";
import styles from "./styles/Heading.module.scss";
interface Props {
  className?: string;
  children: ReactNode;
}

export default function Heading({ className, children }: Props) {
  return (
    <>
      <h2 className={styles.heading}>{children}</h2>
    </>
  );
}
