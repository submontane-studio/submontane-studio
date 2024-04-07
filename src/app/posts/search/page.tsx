import type { Post } from "@/app/@types/post";
import Breadcrumb from "@/app/_component/Breadcrumb";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import getCategories from "@/app/_lib/getCategories";
import getSearchResults from "@/app/_lib/getSearchResults";
import { Metadata } from "next";
import Category from "../_component/Category";
import Posts from "../_component/Posts";
import SearchBox from "../_component/SearchBox";
import styles from "../styles/posts.module.scss";

export const metadata: Metadata = {
  title: "SUBMONTANE BLOG",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams.q;

  const data = await getSearchResults(query as string);
  const category = await getCategories();

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
            pathname: `${process.env.SITE_URL}posts/${searchParams.q}`,
            title: `検索結果 : ${searchParams.q}`,
          },
        ]}
        className={styles.breadcrumb}
      />
      <div className={styles.heading}>
        <h1>検索結果 : {query}</h1>
        <div className={styles.narrowing}>
          <Category contents={category} />
          <SearchBox />
        </div>
      </div>
      <Posts data={data} />
      <Conversion />
      <Footer />
    </>
  );
}
