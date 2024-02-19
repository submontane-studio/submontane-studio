"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Hamburger() {
  const matches = useMediaQuery("(max-width: 768px)");
  return matches ? (
    <div id="hamburger" className="hamburger">
      <button type="button">
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
