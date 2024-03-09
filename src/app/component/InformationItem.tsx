import { headers } from "next/headers";
import Link from "next/link";

interface Item {
  id: string;
  createdAt: string;
  updatedAt?: string;
  title: string;
}
export default async function InformationItem() {
  const res = await fetch(
    "https://submontane.microcms.io/api/v1/posts?filters=category%5Bequals%5Dalert%5Bor%5Dinformation",
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  return data.contents.map((item: Item) => (
    <li key={item.title}>
      <Link href={`/${item.id}`}>
        <p className="postTime">
          <time dateTime={item.createdAt}>{item.createdAt}</time>
        </p>
        <h3>{item.title}</h3>
      </Link>
    </li>
  ));
}
