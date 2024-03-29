"use client";
import styles from "../styles/posts.module.scss";

const expand = (e: React.MouseEvent<HTMLInputElement>) => {
  const search = e.currentTarget.parentElement;
  search?.classList.add("is-expand");
};

export default function SearchBox() {
  return (
    <div className={styles.search}>
      <input
        type="search"
        name="search"
        id="search"
        aria-label="記事を検索"
        onClick={expand}
      />
    </div>
  );
}
