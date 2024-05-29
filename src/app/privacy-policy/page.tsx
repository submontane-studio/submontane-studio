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
        <section className={styles.paragraph}>
          <Heading>収集される情報</Heading>
          <div className="txt">
            <p>
              当事務所はお客様から提供される情報を収集する場合があります。これには、お名前、連絡先情報（メールアドレス、住所、電話番号など）、プロジェクトに関連する情報が含まれます。
            </p>
          </div>
        </section>
        <section className={styles.paragraph}>
          <Heading>情報の使用</Heading>
          <div className="txt">
            <p>当事務所は収集した情報を以下の目的で使用することがあります</p>
            <ul className="purpose-list">
              <li>お客様へのサービス提供およびプロジェクトの管理</li>
              <li>お客様との連絡、問い合わせ対応</li>
              <li>サービス向上や新しいサービスの提供</li>
              <li>法的な義務の遵守</li>
            </ul>
          </div>
        </section>
        <section className={styles.paragraph}>
          <Heading>情報の共有と開示</Heading>
          <div className="txt">
            <p>
              当事務所はお客様の個人情報を第三者と共有することはありません。ただし、お客様の同意がある場合や法律に基づく要求がある場合を除きます。
            </p>
          </div>
        </section>
        <section className={styles.paragraph}>
          <Heading>情報の保管とセキュリティ</Heading>
          <div className="txt">
            <p>
              当事務所はお客様の情報を適切に保管し、安全に管理します。適切な物理的、電子的、手続き上の手段を用いて情報を保護し、不正アクセスや情報の損失、漏洩を防止します。
            </p>
          </div>
        </section>
        <section className={styles.paragraph}>
          <Heading>収集される情報</Heading>
          <div className="txt">
            当事務所はお客様から提供される情報を収集する場合があります。これには、お名前、連絡先情報（メールアドレス、住所、電話番号など）、プロジェクトに関連する情報が含まれます。
          </div>
        </section>
        <section className={styles.paragraph}>
          <Heading>お問い合わせ先</Heading>
          <div className="txt">
            <p>
              お客様のプライバシーに関するご質問やお問い合わせは、下記連絡先までお願いいたします
            </p>
            <div className="address">
              <h3>SUBMONTANE STUDIO</h3>
              <address>
                代表 : <strong>山下 剛</strong>
                <br />
                〒562-0027
                <br />
                大阪府箕面市石丸2-8-4
                <br />
                メールアドレス ：
                &#x69;&#x6e;&#x66;&#x6f;&#x40;&#x73;&#x75;&#x62;&#x6d;&#x6f;&#x6e;&#x74;&#x61;&#x6e;&#x65;&#x2e;&#x6a;&#x70;
              </address>
            </div>
          </div>
        </section>
        <section className={styles.paragraph}>
          <Heading>プライバシーポリシーの変更</Heading>
          <div className="txt">
            当社はこのプライバシーポリシーを変更することがあります。変更がある場合は、当ウェブサイトなどで通知いたします。
          </div>
        </section>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
