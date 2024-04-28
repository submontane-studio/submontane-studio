"use client";

import type { CategoryListType, CategoryType } from "@/@types/category";
import Link from "next/link";
import styles from "../styles/posts.module.scss";
const expand = (e: React.MouseEvent | React.KeyboardEvent) => {
  const target = e.currentTarget;
  const category = target.nextElementSibling;
  if (category) {
    category.classList.toggle("is-expand");
  }
};

export default function Category({ contents }: { contents: CategoryListType }) {
  return (
    <>
      <div className={styles.category}>
        <div
          role="heading"
          className="category-heading"
          aria-level={2}
          alia-controls="js-category-list"
          onClick={expand}
          onKeyDown={expand}
        >
          カテゴリーで絞り込み
        </div>
        <ul id="js-category-list" role="menu" className="category-list">
          {contents.contents.map((category: CategoryType) => (
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
