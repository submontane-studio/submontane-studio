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

  if (part.value === "") {
    part.classList.add("is-error");
  }

  if (parent?.id === "name") {
    if (part.id === "family-name") {
      part.setCustomValidity("姓を入力してください");
    } else {
      part.setCustomValidity("名を入力してください");
    }

    parent.insertAdjacentHTML(
      "beforeend",
      `<p class="is-error">${part.validationMessage}</p>`,
    );
  }
};

export const Input = ({ id, className, ...rest }: InputProps) => {
  return <input id={id} className={className} {...rest} onBlur={validate} />;
};
