"use client";

import Breadcrumb from "@/app/_component/Breadcrumb";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import { useRouter, useSearchParams } from "next/navigation";
import ConfirmForm from "../_component/ConfirmForm";
import Form from "../_component/Form";
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
            pathname: `${process.env.SITE_URL}contact/confirm/`,
            title: "入力確認",
          },
        ]}
        className={styles.breadcrumb}
      />
      <main>
        <ConfirmForm />
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
