import Link from "next/link";
import { Contact } from "../Button/Button";
import { Close, ParentItem } from "../hamburger";
import Items from "./navigation.json";

export default function Navigation() {
  return (
    <nav id="navigation" className="navigation" aria-hidden="false">
      <Close />
      <ul className="navigation-list">
        {Items.map((item) => (
          <ParentItem slug={item.slug} key={item.slug}>
            {item.slug === "marketing" ? (
              <>
                <span
                  role="menuitem"
                  className="hasChildren"
                  tabIndex={0}
                  aria-haspopup="true"
                >
                  {item.name}
                </span>
                <ul className="navigation-children">
                  {item.subpages?.map((subItem) => (
                    <li key={subItem.slug}>
                      <Link
                        key={subItem.slug}
                        href={`${item.slug}/${subItem.slug}`}
                        role="menuitem"
                        aria-expanded="false"
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
      <Contact />
    </nav>
  );
}
