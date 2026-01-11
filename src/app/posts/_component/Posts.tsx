import type { PostList } from "@/@types/post";
import { Button } from "@/app/_component/Button/Button";
import PostCard from "@/app/_component/Post/PostCard";
import Image from "next/image";
import styles from "../styles/posts.module.scss";

export default function Posts({
  data,
  className = "",
}: { data: PostList; className?: string }) {
  return (
    <>
      {data.contents.length !== 0 ? (
        <ul className={`${styles.posts}${className && ` ${className}`}`}>
          {data.contents.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <>
          <div className={styles.notfound}>
            <Image
              src="/images/mobile/posts/ico_notfound.svg"
              alt=""
              width={80}
              height={80}
            />
            <p>記事が見つかりませんでした。</p>
          </div>
          <Button
            label="記事一覧へ戻る"
            url="/posts/"
            buttonName="back-index"
          />
        </>
      )}
    </>
  );
}
