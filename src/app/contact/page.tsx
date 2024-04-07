import { Metadata } from "next";
import Breadcrumb from "../_component/Breadcrumb";
import Conversion from "../_component/Conversion";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import styles from "./styles/contact.module.scss";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function Contact() {
  return (
    <>
      <div className="inpage-heading">
        <Header />
        <h1>お問い合わせ</h1>
      </div>
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "ホーム",
          },
          {
            pathname: `${process.env.SITE_URL}contact/`,
            title: "お問い合わせ",
          },
        ]}
        className={styles.breadcrumb}
      />
      <Conversion />
      <Footer />
    </>
  );
}
