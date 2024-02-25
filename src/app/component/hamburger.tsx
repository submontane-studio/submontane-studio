"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const slideNav = () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("navigation");
  nav?.classList.contains("is-open")
    ? nav?.classList.remove("is-open")
    : nav?.classList.add("is-open");
};

export function Open() {
  const matches = useMediaQuery("(max-width: 768px)");
  return matches ? (
    <div id="hamburger" className="hamburger">
      <button type="button" onClick={slideNav}>
        <Image
          src="/images/mobile/common/header/ico_hamburger.svg"
          width={18}
          height={15}
          alt="メニューを開く"
        />
      </button>
    </div>
  ) : null;
}

export function Close() {
  const matches = useMediaQuery("(max-width: 768px)");
  return matches ? (
    <p id="close" className="close">
      <button type="button" onClick={slideNav}>
        <Image
          src="/images/mobile/common/header/ico_close.svg"
          width={36}
          height={35}
          alt="メニューを閉じる"
        />
      </button>
    </p>
  ) : null;
}
