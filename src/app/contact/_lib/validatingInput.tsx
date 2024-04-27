"use client";

import { useState } from "react";

const message = "必須項目です";

const root = document.querySelector(":root") as HTMLElement;
const autofill = root.style.getPropertyValue("--autofill");

const validatingEmpty = (
  el: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  const errorEl = document.querySelector(".is-error");
  const target = el.target as HTMLInputElement;
  const parent = target.closest("dd");

  target.setCustomValidity("");

  if (!parent?.querySelector(".is-error")) {
    if (el.target.validity.valueMissing) {
      el.target.setCustomValidity(message);
      el.target
        .closest("dd")
        ?.insertAdjacentHTML(
          "beforeend",
          `<p class="is-error is-empty">${message}</p>`,
        );
    } else if (autofill || target.validity.valid) {
      errorEl?.remove();
    }
  }
};

export default validatingEmpty;
