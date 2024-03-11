"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const SlideNav = () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("navigation");
  nav?.classList.toggle("is-open");
  if (nav?.getAttribute("aria-hidden") === "true") {
    nav?.setAttribute("aria-hidden", "false");
  } else {
    nav?.setAttribute("aria-hidden", "true");
  }
};
const SlideChildren = () => {
  const hasChildren = document.getElementById("js-hasChildren");
  const children = hasChildren?.querySelector("span")?.nextElementSibling;
  children?.classList.toggle("is-open");
  if (children?.getAttribute("aria-expanded") === "true") {
    children?.setAttribute("aria-expanded", "false");
  } else {
    children?.setAttribute("aria-expanded", "true");
  }
};

export function ParentItem({
  children,
  slug,
}: Readonly<{ children: React.ReactNode; slug: string }>) {
  const matches = useMediaQuery("(max-width: 768px)");

  return slug === "marketing" ? (
    matches ? (
      <li
        key={slug}
        id="js-hasChildren"
        className={slug}
        onClick={SlideChildren}
        onKeyDown={SlideChildren}
      >
        {children}
      </li>
    ) : (
      <li
        key={slug}
        id="js-hasChildren"
        className={slug}
        onMouseEnter={SlideChildren}
        onMouseLeave={SlideChildren}
      >
        {children}
      </li>
    )
  ) : (
    <li key={slug} className={slug}>
      {children}
    </li>
  );
}

export function Open() {
  const matches = useMediaQuery("(max-width: 768px)");
  return matches ? (
    <div id="hamburger" className="hamburger">
      <button
        type="button"
        onClick={SlideNav}
        aria-controls="navigation"
        aria-expanded="false"
      >
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
    <p id="close" className="nav-close">
      <button type="button" onClick={SlideNav}>
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
