import Breadcrumb from "@/app/_component/Breadcrumb";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import Heading from "@/app/_component/Heading/Heading";
import { Metadata } from "next";
import styles from "./styles/privacy-policy.module.scss";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function Privacy() {
  return (
    <>
      <div className="inpage-heading">
        <Header />
        <h1>プライバシーポリシー</h1>
      </div>
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "ホーム",
          },
          {
            pathname: `${process.env.SITE_URL}information/`,
            title: "プライバシーポリシー",
          },
        ]}
      />
      <main>
        <div id="intro" className={styles.intro}>
          <p>
            このプライバシーポリシーは、SUBMONTANE
            STUDIO（以下、「当事務所」、「私たち」、「われわれ」とします）がお客様の個人情報をどのように収集、使用、保護するかについて説明します。
          </p>
        </div>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
