import type { CategoryListType } from "@/app/@types/category";
import type { Post } from "@/app/@types/post";
import Header from "@/app/_component/Header";
import getCategories from "@/app/_lib/getCategories";
import getCategorizedPosts from "@/app/_lib/getCategorizedPosts";
import Category from "../../_component/Category";
import Posts from "../../_component/Posts";
import SearchBox from "../../_component/SearchBox";
import styles from "../../styles/posts.module.scss";

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
      <div className={styles.heading}>
        <h1>BLOG</h1>
        <div className={styles.narrowing}>
          <Category contents={category} />
          <SearchBox />
        </div>
      </div>
      <Posts data={data} />
    </>
  );
}
