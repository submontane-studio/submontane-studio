"use client";

import Breadcrumb from "@/app/_component/Breadcrumb";
import { Button } from "@/app/_component/Button/Button";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import styles from "../styles/contact.module.scss";

export default function Confirm() {
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
          {
            pathname: `${process.env.SITE_URL}contact/thanks/`,
            title: "お問い合わせ完了",
          },
        ]}
        className={styles.breadcrumb}
      />
      <main>
        <div className={styles.thanks}>
          <h2>お問い合わせありがとうございます</h2>
          <p>
            お問い合わせいただきありがとうございます。
            <br />
            お問い合わせ内容を確認のうえ、数日中にご連絡いたします。
          </p>
        </div>
        <Button label="トップへ戻る" buttonName="button-index" />
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
