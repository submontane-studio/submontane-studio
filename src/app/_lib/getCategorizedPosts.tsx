import type { PostList } from "@/@types/post";
import { fetchMicroCMS } from "./api";

export default async function getCategorizedPosts(
  id: string,
): Promise<PostList> {
  return fetchMicroCMS<PostList>(
    "posts",
    {
      filters: `category[equals]${id}`,
    },
    {
      next: { revalidate: 3600 },
    },
  );
}
