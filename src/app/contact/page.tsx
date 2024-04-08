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
        <form action="">
          <dl className={styles.form}>
            <dt>
              お名前<span className="required">必須</span>
            </dt>
            <dd>
              姓
              <input
                type="text"
                name="姓"
                id="family-name"
                className="family-name"
                required
                aria-required
              />
              名
              <input
                type="text"
                name="名"
                id="first-name"
                className="first-name"
                required
                aria-required
              />
            </dd>
            <dt>屋号・商号・会社名</dt>
            <dd>
              <input
                type="text"
                name="屋号"
                id="trade-name"
                className="trade-name"
              />
            </dd>
            <dt>
              メールアドレス<span className="required">必須</span>
            </dt>
            <dd>
              <input
                type="email"
                name="メールアドレス"
                id="email"
                required
                aria-required
              />
            </dd>
            <dt>
              メールアドレス（確認）<span className="required">必須</span>
            </dt>
            <dd>
              <input
                type="email"
                name="メールアドレス（確認）"
                id="email-confirm"
                required
                aria-required
              />
            </dd>
            <dt>お問い合わせ種別</dt>
            <dd>
              <ul>
                <li>
                  <input type="radio" name="お見積もり依頼" id="estimate" />
                  お見積もり依頼
                </li>
                <li>
                  <input type="radio" name="ご質問" id="question" />
                  ご質問
                </li>
                <li>
                  <input type="radio" name="その他" id="other" />
                  その他
                </li>
              </ul>
            </dd>
            <dt>
              お問い合わせ内容<span className="required">必須</span>
            </dt>
            <dd>
              <textarea
                name="お問い合わせ内容"
                id="detail"
                className="detail"
              />
            </dd>
          </dl>
          <input type="checkbox" name="プライバシーポリシー" id="privacy" />{" "}
          <a href="/privacy-policy" target="_blank" rel="noreferrer">
            プライバシーポリシー
          </a>
          に同意する
          <ul>
            <li>
              <input
                type="submit"
                value="確認"
                className="button button-confirm"
              />
            </li>
            <li>
              <button type="reset" className="button button-clear">
                クリア
              </button>
            </li>
          </ul>
        </form>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
