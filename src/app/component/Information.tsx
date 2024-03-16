import styles from "../styles/home.module.scss";
import InformationItem from "./InformationItem";

export default function Information() {
  return (
    <section className={styles.information}>
      <h2>お知らせ</h2>
      <ul id="information" className={styles["information-list"]}>
        <InformationItem />
      </ul>
    </section>
  );
}
