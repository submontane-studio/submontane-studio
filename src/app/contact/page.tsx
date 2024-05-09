import { Metadata } from "next";
import Breadcrumb from "../_component/Breadcrumb";
import Conversion from "../_component/Conversion";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Form from "./_component/Form";
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
      <main>
        <div className={styles.intro}>
          <p>
            案件のご相談やその他のお問い合わせの際は、以下のフォームをご使用ください。
            <br />
            通常、数日でメールにてご返信いたします。
            <br />
            いただきました内容は、当事務所の
            <a href="/privacy-policy" target="_blank" rel="noreferrer">
              プライバシーポリシー
            </a>
            に則って適正に処理いたします。
            <br />
            <span className="required">必須</span>
            は必須項目です。必ずご入力ください。
          </p>
        </div>
        <Form />
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
