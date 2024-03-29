import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "../_component/Header";
import getCategories from "../_lib/getCategories";
import getPosts from "../_lib/getPosts";
import Category from "./_component/Category";
import SearchBox from "./_component/SearchBox";
import styles from "./styles/posts.module.scss";

type Post = {
  id: string;
  updatedAt: Date;
  publishedAt: Date;
  pin: boolean;
  title: string;
  category: {
    id: string;
    name: string;
  };
  keyvisual?: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
};

export const metadata: Metadata = {
  title: "SUBMONTANE STUDIO BLOG",
};

export default async function Index() {
  const data = await getPosts();
  const categories = await getCategories();

  return (
    <>
      <div className="is-blog">
        <Header />
      </div>
      <div className={styles.heading}>
        <h1>BLOG</h1>
        <div className={styles.narrowing}>
          <Category contents={categories.contents} />
          <SearchBox />
        </div>
      </div>
      <ul className={styles.posts}>
        {data.contents.map((post: Post, index: number) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p className={`category is-${post.category.id}`}>
                {post.category.name}
              </p>
              <div className="keyvisual">
                <Image
                  src={
                    post.keyvisual
                      ? post.keyvisual.url
                      : "/images/mobile/common/mohammad-alizade-XgeZu2jBaVI-unsplash.jpg"
                  }
                  alt=""
                  sizes="100vw"
                  fill={true}
                />
              </div>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
