import Link from "next/link";
import Items from "./navigation.json";

export default function Navigation() {
  return (
    <nav>
      <ul>
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
