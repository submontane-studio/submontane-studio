"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "../styles/contact.module.scss";
import { Input, Textarea } from "./Parts";

export default function ConfirmForm() {
  const params = useSearchParams();
  const query = params.get("data");
  const decoded = query ? decodeURIComponent(query) : null;
  const parsed = decoded ? JSON.parse(decoded) : null;

  const [Inquiry, setInquiry] = useState({
    familyName: parsed.familyName,
    givenName: parsed.givenName,
    tradeName: parsed.tradeName || "",
    email: parsed.email,
    type: parsed.type,
    detail: parsed.detail,
    privacy: parsed.privacy || false,
  });

  return (
    <>
      <form action="" noValidate>
        <dl className={`${styles.form} is-confirm`}>
          <dt>
            <label htmlFor="family-name">
              お名前<span className="required">必須</span>
            </label>
          </dt>
          <dd>
            <fieldset name="名前" id="name" className="name">
              <p className="confirm-name">{Inquiry.familyName}</p>
              <input
                type="hidden"
                name="family-name"
                id="family-name"
                className="family-name"
                value={Inquiry.familyName}
              />
              <p className="confirm-name">{Inquiry.givenName}</p>
              <input
                type="hidden"
                name="given-name"
                id="given-name"
                className="given-name"
                value={Inquiry.givenName}
              />
            </fieldset>
          </dd>
          <dt>
            <label htmlFor="trade-name">屋号・商号・会社名</label>
          </dt>
          <dd>
            <p className="confirm-trade">{Inquiry.tradeName || "未記入"}</p>
            <input
              type="hidden"
              name="trade-name"
              id="trade-name"
              className="trade-name"
              value={Inquiry.tradeName}
            />
          </dd>
          <dt>
            <label htmlFor="email">
              メールアドレス<span className="required">必須</span>
            </label>
          </dt>
          <dd>
            <p className="confirm-email">{Inquiry.email}</p>
            <Input
              type="hidden"
              name="email"
              id="email"
              value={Inquiry.email}
            />
          </dd>
          <dt>お問い合わせ種別</dt>
          <dd>
            <p className="confirm-type">{Inquiry.type}</p>
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
          <p className="confirm-privacy">
            {Inquiry.privacy || "プライバシーポリシーに同意しました"}
          </p>
        </div>
        <ul className={styles["button-list"]}>
          <li>
            <input
              type="submit"
              value="送信"
              className="button button-confirm"
            />
          </li>
          <li>
            <a href="/contact/" className="button button-back" role="button">
              戻る
            </a>
          </li>
        </ul>
      </form>
    </>
  );
}
