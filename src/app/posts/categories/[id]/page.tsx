import getCategories from "@/app/_lib/getCategories";
import getCategorizedPosts from "@/app/_lib/getCategorizedPosts";
type Posts = {
  title: string;
  id: string;
};

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.contents.map((posts: Posts) => ({
    id: posts.id,
  }));
}

export default async function categorizedPosts({
  params,
}: { params: { id: string } }) {
  const data = await getCategorizedPosts(params.id);
  return data.contents.map((posts: Posts) => <h2>{posts.title}</h2>);
}
