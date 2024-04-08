"use client";
import styles from "../styles/posts.module.scss";

export default function SearchBox() {
  return (
    <div className={styles.search}>
      <form action="/posts/search" method="get">
        <input
          type="search"
          name="q"
          id="search"
          aria-label="記事を検索"
          rel="search"
        />
      </form>
    </div>
  );
}
