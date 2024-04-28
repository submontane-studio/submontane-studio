"use client";

const validatingEmpty = (el: HTMLInputElement | HTMLTextAreaElement) => {
  const message: string = "必須項目です";
  const parent: HTMLElement | null = el.closest("dd");

  el.setCustomValidity("");

  if (el.validity.valueMissing) {
    el.setCustomValidity(message);

    if (!parent?.querySelector("p.is-empty")) {
      el.classList.add("is-error");

      parent?.insertAdjacentHTML(
        "beforeend",
        `<p class="is-error is-empty">${message}</p>`,
      );
    }

    if (
      el.classList.contains("family-name") ||
      el.classList.contains("given-name")
    ) {
      el.classList.add("is-error");
    }
  } else {
    if (!parent?.querySelector("input.is-error")) {
      parent?.querySelector(".is-empty")?.remove();
      console.log(document.querySelector(".is-empty"));
    }
    el.classList.remove("is-error");
  }
};

export default function validatingInput(
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
) {
  validatingEmpty(e.target as HTMLInputElement | HTMLTextAreaElement);
}
