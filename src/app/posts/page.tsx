import type { Post } from "@/app/@types/post";
import { format } from "@formkit/tempo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Conversion from "../_component/Conversion";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import getCategories from "../_lib/getCategories";
import getPosts from "../_lib/getPosts";
import Category from "./_component/Category";
import More from "./_component/More";
import SearchBox from "./_component/SearchBox";
import styles from "./styles/posts.module.scss";

const pages = 1;

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
      <ul id="js-posts" className={styles.posts}>
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
              <div className={styles.date}>
                <p className="published">
                  <time
                    dateTime={format(data.publishedAt, "YYYY-MM-DD")}
                    aria-label={format(
                      data.publishedAt,
                      "公開日 YYYY年MM月DD日",
                    )}
                  >
                    {format(data.publishedAt, "YYYY.MM.DD")}
                  </time>
                </p>
                <p className="updated">
                  <time
                    dateTime={format(data.updatedAt, "YYYY-MM-DD")}
                    aria-label={format(data.updatedAt, "更新日 YYYY年MM月DD日")}
                  >
                    {format(data.updatedAt, "YYYY.MM.DD")}
                  </time>
                </p>
              </div>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {data.totalCount > 10 ? <More item={9} /> : null}
      <Conversion />
      <Footer />
    </>
  );
}
