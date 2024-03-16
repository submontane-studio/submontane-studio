import Link from "next/link";
import { Contact } from "./button/Button";
import { Close, ParentItem } from "./hamburger";
import Items from "./navigation.json";

export default function Navigation() {
  return (
    <nav id="navigation" className="navigation" aria-hidden="true">
      <Close />
      <ul className="navigation-list">
        {Items.map((item) => (
          <ParentItem slug={item.slug} key={item.slug}>
            {item.slug === "marketing" ? (
              <>
                <span className="hasChildren" aria-expanded="true">
                  {item.name}
                </span>
                <ul className="navigation-children">
                  {item.subpages?.map((subItem) => (
                    <li key={subItem.slug}>
                      <Link
                        key={subItem.slug}
                        href={`${item.slug}/${subItem.slug}`}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.slug}>{item.name}</Link>
            )}
          </ParentItem>
        ))}
      </ul>
      <Contact />
    </nav>
  );
}
