"use client";

import useMediaQuery from "./useMediaQuery";

export default function ServiceItem({
  children,
  slug,
  isContract,
}: Readonly<{ children: React.ReactNode; slug: string; isContract: boolean }>) {
  const matches = useMediaQuery("(max-width: 768px)");

  return matches ? (
    <li
      key={slug}
      className={`services-item ${slug} ${isContract ? " is-contract" : ""}`}
    >
      {children}
    </li>
  ) : null;
}
