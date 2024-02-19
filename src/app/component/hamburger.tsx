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

export default function Hamburger() {
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
