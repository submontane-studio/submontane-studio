"use client";

import appendPosts from "@/app/_lib/appendPosts";
import { useState } from "react";
import styles from "../styles/posts.module.scss";

export default function More({ item }: { item: number }) {
  const [limit, setLimit] = useState(item + 9);
  const [offset, setOffset] = useState(0);

  return (
    <button
      type="button"
      className={`more ${styles.more}`}
      onClick={() => {
        appendPosts(limit, offset);
        setLimit(limit + item);
        setOffset(offset + item);
      }}
    >
      もっと見る
    </button>
  );
}
