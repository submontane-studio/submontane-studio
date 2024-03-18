"use client";

import useMediaQuery from "./useMediaQuery";

export default function ServiceItem({
  children,
  slug,
  isContract,
}: Readonly<{ children: React.ReactNode; slug: string; isContract: boolean }>) {
  const matches = useMediaQuery("(max-width: 768px)");

  const expand: (
    e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,
  ) => void = (e) => {
    e.currentTarget.classList.toggle("is-expanded");
  };

  return matches ? (
    <li
      key={slug}
      className={`services-item ${slug} ${isContract ? " is-contract" : ""}`}
    >
      {children}
    </li>
  ) : (
    <li
      key={slug}
      className={`services-item ${slug} ${isContract ? " is-contract" : ""}`}
      onClick={isContract ? expand : undefined}
      onKeyDown={isContract ? expand : undefined}
    >
      {children}
    </li>
  );
}
