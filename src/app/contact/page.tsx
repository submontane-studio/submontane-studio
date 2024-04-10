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
              <label htmlFor="family-name">
                お名前<span className="required">必須</span>
              </label>
            </dt>
            <dd>
              <fieldset name="名前" id="name" className="name">
                <label htmlFor="family-name">姓</label>
                <input
                  type="text"
                  name="family-name"
                  id="family-name"
                  className="family-name"
                  pattern="^[a-zA-Zぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]*$"
                  placeholder="山田"
                  aria-placeholder="山田"
                  aria-autocomplete="both"
                  required
                  aria-required
                />
                <label htmlFor="first-name">名</label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="first-name"
                  pattern="^[a-zA-Zぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]*$"
                  placeholder="太郎"
                  aria-placeholder="太郎"
                  aria-autocomplete="both"
                  required
                  aria-required
                />
              </fieldset>
            </dd>
            <dt>
              <label htmlFor="trade-name">屋号・商号・会社名</label>
            </dt>
            <dd>
              <input
                type="text"
                name="trade-name"
                id="trade-name"
                className="trade-name"
                placeholder="株式会社〇〇"
                aria-placeholder="株式会社〇〇"
                aria-autocomplete="both"
              />
            </dd>
            <dt>
              <label htmlFor="email">
                メールアドレス<span className="required">必須</span>
              </label>
            </dt>
            <dd>
              <input
                type="email"
                name="email"
                id="email"
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                placeholder="taro@example.com"
                aria-placeholder="taro@example.com"
                aria-autocomplete="both"
                required
                aria-required
              />
            </dd>
            <dt>
              <label htmlFor="email-confirm">
                メールアドレス（確認）<span className="required">必須</span>
              </label>
            </dt>
            <dd>
              <input
                type="email"
                name="email-confirm"
                id="email-confirm"
                pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                required
                aria-required
              />
            </dd>
            <dt>お問い合わせ種別</dt>
            <dd>
              <ul className="type-list">
                <li>
                  <input
                    type="radio"
                    name="type"
                    id="estimate"
                    className="type visually-hidden"
                  />
                  <label htmlFor="estimate">お見積もり依頼</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="type"
                    id="question"
                    className="type visually-hidden"
                  />
                  <label htmlFor="question">ご質問</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="type"
                    id="other"
                    defaultChecked
                    aria-checked="true"
                    className="type visually-hidden"
                  />
                  <label htmlFor="other">その他</label>
                </li>
              </ul>
            </dd>
            <dt>
              <label htmlFor="detail">
                お問い合わせ内容<span className="required">必須</span>
              </label>
            </dt>
            <dd>
              <textarea name="detail" id="detail" className="detail" />
            </dd>
          </dl>
          <div className={styles.privacy}>
            <input type="checkbox" name="プライバシーポリシー" id="privacy" />
            <label htmlFor="privacy">
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noreferrer privacy-policy"
              >
                プライバシーポリシー
              </a>
              に同意する
            </label>
          </div>
          <ul className="button-list">
            <li>
              <input
                type="submit"
                value="確認"
                className="button button-confirm"
              />
            </li>
            <li>
              <input type="reset" value="クリア" />
            </li>
          </ul>
        </form>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
