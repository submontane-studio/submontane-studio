"use server";

import { format } from "@formkit/tempo";
import Image from "next/image";
import Link from "next/link";
import styles from "../posts/styles/posts.module.scss";

type Post = {
  id: string;
  updatedAt: Date;
  publishedAt: Date;
  pin: boolean;
  title: string;
  category: {
    id: string;
    name: string;
  };
  keyvisual?: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
};

export default async function getMore(limit: number, offset: number) {
  const res = await fetch(
    `${process.env.MICROCMS_API_URL}posts?limit=${limit}&offset=${offset}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  const jsx = (
    <>
      {data.contents.map((post: Post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <p className={`category is-${post.category.id}`}>
              {post.category.name}
            </p>
            <div className="keyvisual">
              <Image
                src={
                  post.keyvisual
                    ? post.keyvisual.url
                    : "/images/mobile/common/mohammad-alizade-XgeZu2jBaVI-unsplash.jpg"
                }
                alt=""
                sizes="100vw"
                fill={true}
              />
            </div>
            <div className={styles.date}>
              <p className="published">
                <time
                  dateTime={format(data.publishedAt, "YYYY-MM-DD")}
                  aria-label={format(data.publishedAt, "公開日 YYYY年MM月DD日")}
                >
                  {format(data.publishedAt, "YYYY.MM.DD")}
                </time>
              </p>
              <p className="updated">
                <time
                  dateTime={format(data.updatedAt, "YYYY-MM-DD")}
                  aria-label={format(data.updatedAt, "更新日 YYYY年MM月DD日")}
                >
                  {format(data.updatedAt, "YYYY.MM.DD")}
                </time>
              </p>
            </div>
            <h2>{post.title}</h2>
          </Link>
        </li>
      ))}
    </>
  );

  const totalCount = data.totalCount;

  const value = { jsx, totalCount };
  return value;
}
