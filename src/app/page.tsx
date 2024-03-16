import Header from "./component/Header";
import Information from "./component/Information";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.keyvisual}>
        <Header />
        <p className={styles.catch}>
          <span className={styles.line}>Climb Higher,</span>
          <span className={styles.line}>Together</span>
        </p>
      </div>
      <Information />
      <section className={styles.services}>
        <p>test</p>
      </section>
    </>
  );
}
