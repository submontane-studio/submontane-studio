"use client";

import { useState } from "react";
import getMore from "@/app/_lib/getMore";
import PostCard from "@/app/_component/Post/PostCard";
import type { Post } from "@/@types/post";
import styles from "../styles/posts.module.scss";

type Props = {
  initialPosts: Post[];
  initialTotalCount: number;
  itemsPerPage: number;
};

export default function More({
  initialPosts,
  initialTotalCount,
  itemsPerPage,
}: Props) {
  const [posts, setPosts] = useState(initialPosts);
  const [offset, setOffset] = useState(initialPosts.length);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(initialTotalCount);

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const result = await getMore(itemsPerPage, offset);
      setPosts([...posts, ...result.posts]);
      setOffset(offset + itemsPerPage);
      setTotalCount(result.totalCount);
    } catch (error) {
      console.error("Failed to load more posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMore = offset < totalCount;

  return (
    <>
      <ul className={styles.posts} id="js-posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          className={`more ${styles.more}`}
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? "読み込み中..." : "もっと見る"}
        </button>
      )}
    </>
  );
}
