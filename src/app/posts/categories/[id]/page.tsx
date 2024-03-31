import type { Post } from "@/app/@types/post";
import getCategories from "@/app/_lib/getCategories";
import getCategorizedPosts from "@/app/_lib/getCategorizedPosts";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.contents.map((posts: Post) => ({
    id: posts.id,
  }));
}

export default async function categorizedPosts({
  params,
}: { params: { id: string } }) {
  const data = await getCategorizedPosts(params.id);
  return data.contents.map((posts: Post) => <h2>{posts.title}</h2>);
}
