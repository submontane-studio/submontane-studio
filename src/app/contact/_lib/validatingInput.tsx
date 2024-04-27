import { useState } from "react";

const message = "必須項目です";
const errorEl = document.createElement("p");
errorEl.innerText = message;
errorEl.classList.add("is-error");

const validatingEmpty = (el: HTMLInputElement | HTMLTextAreaElement) => {
  errorEl.classList.add("is-empty");

  if (el.validity.valueMissing) {
    el.closest("dd")?.insertAdjacentHTML;
  }
};
