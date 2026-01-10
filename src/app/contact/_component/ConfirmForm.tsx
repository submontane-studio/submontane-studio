"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";
import styles from "../styles/contact.module.scss";
import { Input, Textarea } from "./Parts";

// バリデーションスキーマ
const InquirySchema = z.object({
  familyName: z.string().min(1),
  givenName: z.string().min(1),
  tradeName: z.string().optional(),
  email: z.string().email(),
  type: z.string().min(1),
  detail: z.string().min(1),
  privacy: z.boolean().optional(),
});

export default function ConfirmForm() {
  const params = useSearchParams();
  const router = useRouter();
  const [Inquiry, setInquiry] = useState<z.infer<typeof InquirySchema> | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = params.get("data");

    if (!query) {
      router.push("/contact");
      return;
    }

    try {
      const decoded = decodeURIComponent(query);
      const parsed = JSON.parse(decoded);
      const validated = InquirySchema.parse(parsed);

      setInquiry({
        familyName: validated.familyName,
        givenName: validated.givenName,
        tradeName: validated.tradeName || "",
        email: validated.email,
        type: validated.type,
        detail: validated.detail,
        privacy: validated.privacy || false,
      });
    } catch (err) {
      console.error("Invalid form data:", err);
      setError("フォームデータが不正です。入力画面に戻ります。");
      setTimeout(() => router.push("/contact"), 2000);
    }
  }, [params, router]);

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  if (!Inquiry) {
    return (
      <div className={styles.loading}>
        <p>読み込み中...</p>
      </div>
    );
  }

  return (
    <>
      <form
        action="https://ssgform.com/s/W0d299NTctAX"
        method="POST"
        noValidate
      >
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
            {Inquiry.detail}
            <Textarea
              name="detail"
              id="detail"
              className="detail is-confirm"
              required
              aria-required
              value={Inquiry.detail}
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
