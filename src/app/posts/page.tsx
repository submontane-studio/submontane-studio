import type { CategoryListType } from "@/@types/category";
import type { PostList } from "@/@types/post";
import { format } from "@formkit/tempo";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Breadcrumb from "../_component/Breadcrumb";
import Conversion from "../_component/Conversion";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import getCategories from "../_lib/getCategories";
import getPosts from "../_lib/getPosts";
import Category from "./_component/Category";
import More from "./_component/More";
import SearchBox from "./_component/SearchBox";
import styles from "./styles/posts.module.scss";

export const metadata: Metadata = {
  title: "SUBMONTANE BLOG",
};

export default async function Index() {
  const req = await getPosts();
  const data = req as PostList;

  const catReq = await getCategories();
  const categories = catReq as CategoryListType;

  return (
    <>
      <div className="is-blog">
        <Header />
      </div>
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "ホーム",
          },
          {
            pathname: `${process.env.SITE_URL}posts/`,
            title: "記事一覧",
          },
        ]}
        className={styles.breadcrumb}
      />
      <div className={styles.heading}>
        <h1>BLOG</h1>
        <div className={styles.narrowing}>
          <Category contents={categories} />
          <SearchBox />
        </div>
      </div>
      <More
        initialPosts={data.contents}
        initialTotalCount={data.totalCount}
        itemsPerPage={9}
      />
      <Conversion />
      <Footer />
    </>
  );
}
