import type { PostList } from "@/@types/post";
import { fetchMicroCMS } from "./api";

export default async function getPosts(): Promise<PostList> {
  return fetchMicroCMS<PostList>("posts", { limit: "10" }, {
    next: { revalidate: 3600 },
  });
}
