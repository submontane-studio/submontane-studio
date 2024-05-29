import type { BlogList } from "@/@types/blog";
import { PostList } from "@/@types/post";
import { format, parse } from "@formkit/tempo";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "schema-dts";
import styles from "../../styles/home.module.scss";

type Item = {
  id: string;
  publishedAt: Date;
  updatedAt?: Date;
  title: string;
  category: {
    id: string;
    name: string;
  };
  keyvisual?: {
    url: string;
  };
};

export default async function BlogItem() {
  const res = await fetch(
    "https://submontane.microcms.io/api/v1/posts?limit=3",
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  return (
    <ul className={styles["blog-list"]}>
      {(data as BlogList).contents.map((item: Item) => (
        <li className="blog-item" key={item.id}>
          <Link href={`posts/${item.id}`}>
            <p className={`category is-${item.category.id}`}>
              {item.category.name}
            </p>
            <div className="keyvisual">
              <Image
                src={
                  item.keyvisual?.url
                    ? item.keyvisual?.url
                    : "/images/desktop/common/empty_keyvisual.png"
                }
                alt=""
                fill={true}
                sizes="(max-width: 640px) 100vw, 33.33%"
              />
            </div>
            <div className="date">
              <p className="published">
                <time
                  dateTime={format(item.publishedAt, "YYYY-MM-DD")}
                  aria-label={format(item.publishedAt, "公開日 YYYY年MM月DD日")}
                >
                  {format(item.publishedAt, "YYYY.MM.DD")}
                </time>
              </p>
              {item.updatedAt && (
                <p className="updated">
                  <time
                    dateTime={format(item.updatedAt, "YYYY-MM-DD")}
                    aria-label={format(item.updatedAt, "更新日 YYYY年MM月DD日")}
                  >
                    {format(item.updatedAt, "YYYY.MM.DD")}
                  </time>
                </p>
              )}
            </div>
            <h3>{item.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
