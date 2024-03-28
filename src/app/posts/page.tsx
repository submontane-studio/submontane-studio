import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "../_component/Header";
import getCategories from "../_lib/getCategories";
import getPosts from "../_lib/getPosts";
import styles from "./styles/posts.module.scss";

type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisitedAt: Date;
  pin: boolean;
  title: string;
  category: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    revisitedAt: Date;
    name: string;
  };
  keyvisual?: {
    url: URL;
    height: number;
    width: number;
  };
  content: string;
};

export default async function Index() {
  const data = await getPosts();
  const categories = await getCategories();

  return (
    <>
      <div className="is-blog">
        <Header />
      </div>
      <div role="banner" className={styles.heading}>
        <h1>HEADLINE</h1>
        <div className={styles.narrowing}>
          <div className="category">
            <p className="category-heading">カテゴリで絞り込み</p>
          </div>
        </div>
      </div>
      {data.contents.map((post: Post) => (
        <h2>{post.title}</h2>
      ))}
    </>
  );
}
