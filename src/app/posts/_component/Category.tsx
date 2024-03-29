"use client";

import Link from "next/link";
import styles from "../styles/posts.module.scss";

type Categories = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisitedAt: Date;
  name: string;
};

const expand = (e: React.MouseEvent<HTMLButtonElement>) => {
  const target = e.currentTarget;
  const category = target.nextElementSibling;
  if (category) {
    category.classList.toggle("is-expand");
  }
};

export default function Category(categories: { contents: Categories[] }) {
  return (
    <>
      <div className={styles.category}>
        <button
          type="button"
          className="category-heading"
          aria-level={2}
          alia-controls="js-category-list"
          onClick={expand}
        >
          カテゴリーで絞り込み
        </button>
        <ul id="js-category-list" role="menu" className="category-list">
          {categories.contents.map((category: Categories) => (
            <li key={category.id}>
              <Link role="menuitem" href={`/posts/categories/${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
