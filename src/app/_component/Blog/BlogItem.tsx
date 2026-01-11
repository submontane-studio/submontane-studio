import type { PostList } from "@/@types/post";
import { fetchMicroCMS } from "@/app/_lib/api";
import PostCard from "@/app/_component/Post/PostCard";
import styles from "../../styles/home.module.scss";

export default async function BlogItem() {
  try {
    const data = await fetchMicroCMS<PostList>("posts", { limit: "3" });

    return (
      <ul className={styles["blog-list"]}>
        {data.contents.map((post) => (
          <PostCard key={post.id} post={post} className="blog-item" />
        ))}
      </ul>
    );
  } catch (error) {
    console.error("Failed to fetch blog items:", error);
    return <p>記事の読み込みに失敗しました。</p>;
  }
}
