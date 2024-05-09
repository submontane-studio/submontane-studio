import type { BlogList } from "@/@types/blog";
import { format, parse } from "@formkit/tempo";
import { headers } from "next/headers";
import Link from "next/link";
import styles from "../../styles/home.module.scss";
type Item = {
  id: string;
  publishedAt: Date;
  updatedAt?: Date;
  title: string;
};
export default async function InformationItem() {
  const res = await fetch(
    "https://submontane.microcms.io/api/v1/posts?filters=category%5Bequals%5Dalert%5Bor%5Dinformation&limit=3",
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  return (data as BlogList).contents.map((item: Item) => (
    <li key={item.title}>
      <Link href={`/${item.id}`}>
        <p className={styles.time}>
          <time dateTime={format(item.publishedAt, "YYYY-MM-DD")}>
            {format(item.publishedAt, "YYYY.MM.DD")}
          </time>
        </p>
        <h3>{item.title}</h3>
      </Link>
    </li>
  ));
}
