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
import Posts from "./_component/Posts";
import SearchBox from "./_component/SearchBox";
import styles from "./styles/posts.module.scss";

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
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "トップ",
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
      <Posts className="index" data={data} />
      <Conversion />
      <Footer />
    </>
  );
}
