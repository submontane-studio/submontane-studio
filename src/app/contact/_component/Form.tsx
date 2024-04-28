"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/contact.module.scss";
import { Input, Textarea } from "./Parts";

export default function Form() {
  const router = useRouter();

  const [Inquiry, setInquiry] = useState({
    familyName: "",
    givenName: "",
    tradeName: "",
    email: "",
    type: "その他",
    detail: "",
    privacy: false,
  });

  const confirm = (data: object) => {
    router.push(
      `/contact/confirm?data=${encodeURIComponent(JSON.stringify(data))}`,
    );
  };

  return (
    <>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          confirm(Inquiry);
        }}
        noValidate
      >
        <dl className={styles.form}>
          <dt>
            <label htmlFor="family-name">
              お名前<span className="required">必須</span>
            </label>
          </dt>
          <dd>
            <fieldset name="名前" id="name" className="name">
              <label htmlFor="family-name">姓</label>
              <Input
                type="text"
                name="family-name"
                id="family-name"
                className="family-name"
                pattern="^[a-zA-Zぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]*$"
                placeholder="山田"
                aria-placeholder="山田"
                aria-autocomplete="both"
                required
                aria-required="true"
                onChange={(e) => {
                  setInquiry({ ...Inquiry, familyName: e.target.value });
                }}
              />
              <label htmlFor="given-name">名</label>
              <Input
                type="text"
                name="given-name"
                id="given-name"
                className="given-name"
                pattern="^[a-zA-Zぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]*$"
                placeholder="太郎"
                aria-placeholder="太郎"
                aria-autocomplete="both"
                required
                aria-required
                onChange={(e) => {
                  setInquiry({ ...Inquiry, givenName: e.target.value });
                }}
              />
            </fieldset>
          </dd>
          <dt>
            <label htmlFor="trade-name">屋号・商号・会社名</label>
          </dt>
          <dd>
            <Input
              type="text"
              name="trade-name"
              id="trade-name"
              className="trade-name"
              placeholder="株式会社〇〇"
              aria-placeholder="株式会社〇〇"
              aria-autocomplete="both"
              onChange={(e) => {
                setInquiry({ ...Inquiry, tradeName: e.target.value });
              }}
            />
          </dd>
          <dt>
            <label htmlFor="email">
              メールアドレス<span className="required">必須</span>
            </label>
          </dt>
          <dd>
            <Input
              type="email"
              name="email"
              id="email"
              // pattern="^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
              placeholder="taro@example.com"
              aria-placeholder="taro@example.com"
              aria-autocomplete="both"
              required
              aria-required
              onChange={(e) => {
                setInquiry({ ...Inquiry, email: e.target.value });
              }}
            />
          </dd>
          <dt>
            <label htmlFor="email-confirm">
              メールアドレス（確認）<span className="required">必須</span>
            </label>
          </dt>
          <dd>
            <Input
              type="email"
              name="email-confirm"
              id="email-confirm"
              // pattern="^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
              required
              aria-required
            />
          </dd>
          <dt>お問い合わせ種別</dt>
          <dd>
            <ul className="type-list">
              <li>
                <Input
                  type="radio"
                  name="type"
                  id="estimate"
                  className="type visually-hidden"
                  value="お見積もり依頼"
                  onChange={(e) => {
                    setInquiry({ ...Inquiry, type: e.target.value });
                  }}
                />
                <label htmlFor="estimate">お見積もり依頼</label>
              </li>
              <li>
                <Input
                  type="radio"
                  name="type"
                  id="question"
                  className="type visually-hidden"
                  value="ご質問"
                  onChange={(e) => {
                    setInquiry({ ...Inquiry, type: e.target.value });
                  }}
                />
                <label htmlFor="question">ご質問</label>
              </li>
              <li>
                <Input
                  type="radio"
                  name="type"
                  id="other"
                  defaultChecked
                  aria-checked="true"
                  className="type visually-hidden"
                  value="その他"
                  onChange={(e) => {
                    setInquiry({ ...Inquiry, type: e.target.value });
                  }}
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
            <Textarea
              name="detail"
              id="detail"
              className="detail"
              required
              aria-required
              onChange={(e) => {
                setInquiry({ ...Inquiry, detail: e.target.value });
              }}
            />
          </dd>
        </dl>
        <div className={styles.privacy}>
          <Input
            type="checkbox"
            name="プライバシーポリシー"
            id="privacy"
            required
            aria-required
            onChange={(e) => {
              if ((e.target as HTMLInputElement).checked !== undefined) {
                setInquiry({
                  ...Inquiry,
                  privacy: (e.target as HTMLInputElement).checked,
                });

                const submitButton = document.querySelector(
                  'input[type="submit"].button-confirm',
                ) as HTMLInputElement;

                const invalid = document.querySelector(
                  ".is-error:required:invalid",
                ) as HTMLInputElement | HTMLTextAreaElement;

                if (submitButton /* && invalid.value !== "" */) {
                  invalid.classList.remove("is-error");
                  invalid.setCustomValidity("");

                  document.querySelector("p.is-error")?.remove();

                  submitButton.disabled = false;
                }
              }
            }}
          />
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
        <ul className={styles["button-list"]}>
          <li>
            <input
              type="submit"
              value="確認"
              className="button button-confirm"
              disabled
            />
          </li>
          <li>
            <input
              type="reset"
              value="クリア"
              className="button button-reset"
            />
          </li>
        </ul>
      </form>
    </>
  );
}
