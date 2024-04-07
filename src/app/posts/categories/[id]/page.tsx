import type { CategoryListType } from "@/app/@types/category";
import type { Post } from "@/app/@types/post";
import Breadcrumb from "@/app/_component/Breadcrumb";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import getCategories from "@/app/_lib/getCategories";
import getCategorizedPosts from "@/app/_lib/getCategorizedPosts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Category from "../../_component/Category";
import Posts from "../../_component/Posts";
import SearchBox from "../../_component/SearchBox";
import styles from "../../styles/posts.module.scss";

export const metadata: Metadata = {
  title: "SUBMONTANE BLOG",
};

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.contents.map((posts: Post) => ({
    id: posts.id,
  }));
}

export default async function categorizedPosts({
  categories,
  params,
}: { categories: CategoryListType; params: { id: string } }) {
  const data = await getCategorizedPosts(params.id);
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
            pathname: `${process.env.SITE_URL}posts/${params.id}`,
            title: `${
              data.contents.length >= 1
                ? data.contents[0]?.category.name
                : notFound()
            }`,
          },
        ]}
        className={styles.breadcrumb}
      />
      <div className={styles.heading}>
        <h1>
          {data.contents.length >= 1
            ? `カテゴリー : ${data.contents[0].category.name}`
            : notFound()}
        </h1>
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
