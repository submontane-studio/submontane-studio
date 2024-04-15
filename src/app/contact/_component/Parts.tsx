"use client";

type InputProps = {
  id: string;
  className?: string | undefined;
  [rest: string]: string | boolean | undefined;
};

const validate = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const part = e.target;
  const parent = part.parentElement;
  part.setCustomValidity("");

  if (part.validity.valueMissing) {
    part.classList.add("is-error");
    if (parent?.id === "name") {
      if (part.id === "family-name") {
        part.setCustomValidity("姓を入力してください");

        parent?.insertAdjacentHTML(
          "beforeend",
          `<p class="is-error is-empty-family-name">${part.validationMessage}</p>`,
        );
      } else {
        part.setCustomValidity("名を入力してください");

        parent?.insertAdjacentHTML(
          "beforeend",
          `<p class="is-error is-empty-given-name">${part.validationMessage}</p>`,
        );
      }
    } else if (part.id === "email") {
      part.setCustomValidity("メールアドレスを入力してください");
      part.insertAdjacentHTML(
        "afterend",
        `<p class="is-error">${part.validationMessage}</p>`,
      );
    } else if (part.id === "email-confirm") {
      part.setCustomValidity("もう一度メールアドレスを入力してください");
      part.insertAdjacentHTML(
        "afterend",
        `<p class="is-error">${part.validationMessage}</p>`,
      );
    } else if (part.id === "detail") {
      part.setCustomValidity("お問い合わせ内容を入力してください");
      part.insertAdjacentHTML(
        "afterend",
        `<p class="is-error">${part.validationMessage}</p>`,
      );
    }
  } else if (part.validity.patternMismatch || part.validity.typeMismatch) {
    part.classList.add("is-error");
    if (parent?.id === "name") {
      part.setCustomValidity(
        "半角英数字・ひらがな・カタカナ・漢字で入力してください",
      );
      parent?.insertAdjacentHTML(
        "beforeend",
        `<p class="is-error is-invalid-name">${part.validationMessage}</p>`,
      );
    } else if (parent?.id === "email" || parent?.id === "email-confirm") {
      part.setCustomValidity("メールアドレスの形式で入力してください");
      part.append(`<p class="is-error">${part.validationMessage}</p>`);
    }
  } else if (
    (part as HTMLInputElement).id === "privacy" &&
    (part as HTMLInputElement).checked === false
  ) {
    part.classList.add("is-error");
    part.setCustomValidity("プライバシーポリシーに同意してください");
    parent?.insertAdjacentHTML(
      "beforeend",
      `<p class="is-error">${part.validationMessage}</p>`,
    );
  } else {
    part.classList.remove("is-error");
    parent?.querySelector("p.is-error")?.remove();
  }
};

export const Input = ({ id, className, ...rest }: InputProps) => {
  return <input id={id} className={className} {...rest} onBlur={validate} />;
};

export const Textarea = ({ id, className, ...rest }: InputProps) => {
  return <textarea id={id} className={className} {...rest} onBlur={validate} />;
};
