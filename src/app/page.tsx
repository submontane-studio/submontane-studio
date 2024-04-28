import Blog from "./_component/Blog/Blog";
import Breadcrumb from "./_component/Breadcrumb";
import Conversion from "./_component/Conversion";
import Footer from "./_component/Footer";
import Header from "./_component/Header";
import Information from "./_component/Information/Information";
import Message from "./_component/Message/Message";
import Services from "./_component/Services/Services";
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
      <Services />
      <Message />
      <Blog />
      <Conversion />
      <Footer />
    </>
  );
}
