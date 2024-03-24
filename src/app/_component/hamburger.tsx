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
  const children =
    hasChildren?.querySelector(".hasChildren")?.nextElementSibling;
  children?.classList.add("is-open");
  children?.setAttribute("aria-expanded", "true");
};
const FoldChildren = () => {
  const hasChildren = document.getElementById("js-hasChildren");
  const children =
    hasChildren?.querySelector(".hasChildren")?.nextElementSibling;

  children?.classList.remove("is-open");
  children?.setAttribute("aria-expanded", "false");
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
        onMouseLeave={FoldChildren}
        onFocus={SlideChildren}
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
  if (matches) {
    document.getElementById("navigation")?.setAttribute("aria-hidden", "true");
  }
  return matches ? (
    <div id="hamburger" className="hamburger">
      <button
        type="button"
        onClick={SlideNav}
        aria-controls="navigation"
        aria-expanded="false"
        aria-haspopup="true"
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
          height={36}
          alt="メニューを閉じる"
        />
      </button>
    </p>
  ) : null;
}
