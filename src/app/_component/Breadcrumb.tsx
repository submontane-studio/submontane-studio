import JsonLd from "@/app/_component/JsonLd";
import {
  type BreadcrumbItem,
  createBreadcrumbJsonLd,
} from "@/app/_lib/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};
export default function Breadcrumb({ items, className }: Props): ReactElement {
  return (
    <>
      <ol className={`breadcrumb ${className}`}>
        {items.map(({ pathname, title }, i) => (
          <li key={pathname}>
            {items.length === i + 1 ? (
              title
            ) : (
              <Link
                href={pathname}
                className={title === "ホーム" ? "home" : ""}
              >
                {title}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <JsonLd schema={createBreadcrumbJsonLd(items)} />
    </>
  );
}
