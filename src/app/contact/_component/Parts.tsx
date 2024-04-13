"use client";

type InputProps = {
  id: string;
  className?: string | undefined;
  [x: string]: string | boolean | undefined;
};

const validate = (e: React.FocusEvent<HTMLInputElement>) => {
  const part = e.target;
  const parent = part.parentElement;
  part.setCustomValidity("");

  if (part.validity.valueMissing) {
    part.classList.add("is-error");
    if (parent?.id === "name") {
      if (part.id === "family-name") {
        part.setCustomValidity("姓を入力してください");
      } else {
        part.setCustomValidity("名を入力してください");
      }

      parent?.insertAdjacentHTML(
        "beforeend",
        `<p class="is-error">${part.validationMessage}</p>`,
      );
    }
  } else if (part.validity.patternMismatch) {
    part.classList.add("is-error");
    if (parent?.id === "name") {
      if (part.id === "family-name") {
        part.setCustomValidity("姓の入力が不正です");
      } else {
        part.setCustomValidity("名の入力が不正です");
      }

      parent?.insertAdjacentHTML(
        "beforeend",
        `<p class="is-error">${part.validationMessage}</p>`,
      );
    }
  } else {
    part.classList.remove("is-error");
    parent?.querySelector("p.is-error")?.remove();
  }
};

export const Input = ({ id, className, ...rest }: InputProps) => {
  return <input id={id} className={className} {...rest} onBlur={validate} />;
};
