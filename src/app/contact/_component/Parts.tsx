"use client";

type InputProps = {
  id: string;
  className?: string | undefined;
  [rest: string]:
    | string
    | boolean
    | undefined
    | ((
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>,
      ) => void)
    | undefined;
  checked?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
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
      if (
        part.id === "family-name" &&
        !parent.querySelector(".is-empty-family-name")
      ) {
        part.setCustomValidity("姓を入力してください");

        parent?.insertAdjacentHTML(
          "beforeend",
          `<p class="is-error is-empty-family-name">${part.validationMessage}</p>`,
        );
      } else if (
        part.id === "given-name" &&
        !parent.querySelector(".is-empty-given-name")
      ) {
        part.setCustomValidity("名を入力してください");

        parent?.insertAdjacentHTML(
          "beforeend",
          `<p class="is-error is-empty-given-name">${part.validationMessage}</p>`,
        );
      }
    } else if (
      part.id === "email" &&
      !part.nextElementSibling?.classList.contains("is-empty")
    ) {
      part.setCustomValidity("メールアドレスを入力してください");
      part.insertAdjacentHTML(
        "afterend",
        `<p class="is-error is-empty">${part.validationMessage}</p>`,
      );
    } else if (
      part.id === "email-confirm" &&
      !part.nextElementSibling?.classList.contains("is-error")
    ) {
      part.setCustomValidity("もう一度メールアドレスを入力してください");
      part.insertAdjacentHTML(
        "afterend",
        `<p class="is-error is-empty">${part.validationMessage}</p>`,
      );
    } else if (
      part.id === "detail" &&
      !part.nextElementSibling?.classList.contains("is-error")
    ) {
      part.setCustomValidity("お問い合わせ内容を入力してください");
      part.insertAdjacentHTML(
        "afterend",
        `<p class="is-error is-empty">${part.validationMessage}</p>`,
      );
    }
  } else if (
    (part.validity.patternMismatch || part.validity.typeMismatch) &&
    !parent?.querySelector("p.is-invalid-name")
  ) {
    part.classList.add("is-error");
    if (parent?.id === "name") {
      part.setCustomValidity(
        "半角英数字・ひらがな・カタカナ・漢字で入力してください",
      );
      part.insertAdjacentHTML(
        "beforeend",
        `<p class="is-error is-invalid-name">${part.validationMessage}</p>`,
      );
    } else if (
      (part.id === "email" || part.id === "email-confirm") &&
      !part.nextElementSibling?.classList.contains("is-invalid")
    ) {
      part.setCustomValidity("メールアドレスの形式で入力してください");
      part.insertAdjacentHTML(
        "afterend",
        `<p class="is-error is-invalid">${part.validationMessage}</p>`,
      );
    }
  } else if (
    (part as HTMLInputElement).id === "privacy" &&
    (part as HTMLInputElement).checked === false &&
    !parent?.querySelector("p.is-disagree")
  ) {
    part.classList.add("is-error");
    part.setCustomValidity("プライバシーポリシーに同意してください");
    parent?.insertAdjacentHTML(
      "beforeend",
      `<p class="is-error is-disagree">${part.validationMessage}</p>`,
    );
  } else {
    part.classList.remove("is-error");
    parent?.querySelector("p.is-error")?.remove();
  }

  const email = document.getElementById("email") as HTMLInputElement;

  if (
    part.id === "email-confirm" &&
    email.value !== part.value &&
    !part.nextElementSibling?.classList.contains("is-discord")
  ) {
    part.setCustomValidity("メールアドレスが一致しません");
    part.classList.add("is-error");

    part.insertAdjacentHTML(
      "afterend",
      `<p class="is-error is-discord">${part.validationMessage}</p>`,
    );
  } else if (part.id === "email-confirm" && email.value === part.value) {
    part.classList.remove("is-error");
    part.querySelector("p.is-error")?.remove();
  }
};

export const Input = ({ id, className, onChange, ...rest }: InputProps) => {
  return (
    <input
      id={id}
      className={className}
      {...rest}
      onChange={onChange}
      onBlur={validate}
    />
  );
};

export const Textarea = ({ id, className, ...rest }: InputProps) => {
  return <textarea id={id} className={className} {...rest} onBlur={validate} />;
};
