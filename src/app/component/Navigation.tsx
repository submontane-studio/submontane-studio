import Link from "next/link";
import { Close } from "./hamburger";
import Items from "./navigation.json";

export default function Navigation() {
  return (
    <nav id="navigation" className="navigation">
      <Close />
      <ul className="navigation-list">
        {Items.map((item) => (
          <li key={item.slug}>
            {item.slug === "marketing" ? (
              <span className="hasChildren">{item.name}</span>
            ) : (
              <Link href={item.slug}>{item.name}</Link>
            )}
            <ul>
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
