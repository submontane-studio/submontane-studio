import type { Post } from "@/app/@types/post";
import getSearchResults from "@/app/_lib/getSearchResults";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageNum = searchParams.q;

  const results = await getSearchResults(pageNum as string);

  return results.contents.map((posts: Post) => <h2>{posts.title}</h2>);
}
