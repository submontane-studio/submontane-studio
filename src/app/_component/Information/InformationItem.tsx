import type { PostList } from "@/@types/post";
import { format } from "@formkit/tempo";
import Link from "next/link";
import { fetchMicroCMS } from "@/app/_lib/api";
import styles from "../../styles/home.module.scss";

type Item = {
  id: string;
  publishedAt: Date;
  updatedAt?: Date;
  title: string;
};

export default async function InformationItem() {
  try {
    const data = await fetchMicroCMS<PostList>("posts", {
      filters: "category[equals]information",
      limit: "3",
    });

    return data.contents.map((item: Item) => (
    <li key={item.title}>
      <Link href={`/posts/${item.id}`}>
        <p className={styles.time}>
          <time dateTime={format(item.publishedAt, "YYYY-MM-DD")}>
            {format(item.publishedAt, "YYYY.MM.DD")}
          </time>
        </p>
        <h3>{item.title}</h3>
      </Link>
    </li>
    ));
  } catch (error) {
    console.error("Failed to fetch information items:", error);
    return <p>お知らせの読み込みに失敗しました。</p>;
  }
}
