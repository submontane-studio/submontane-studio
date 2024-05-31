"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Items from "./Navigation/navigation.json";
import { ParentItem } from "./hamburger";

export default function FooterNavigation() {
  const matches = useMediaQuery("(max-width: 768px)");

  return matches ? null : (
    <ul className="footer-navigation">
      {Items.map((item) => (
        <ParentItem slug={item.slug} key={item.slug}>
          {item.slug === "marketing" ? (
            <>
              <span role="menuitem" tabIndex={0}>
                {item.name}
              </span>
              <ul className="navigation-children">
                {item.subpages?.map((subItem) => (
                  <li key={subItem.slug}>
                    <Link
                      key={subItem.slug}
                      href={`${item.slug}/${subItem.slug}`}
                      role="menuitem"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link href={item.slug} role="menuitem">
              {item.name}
            </Link>
          )}
        </ParentItem>
      ))}
    </ul>
  );
}
