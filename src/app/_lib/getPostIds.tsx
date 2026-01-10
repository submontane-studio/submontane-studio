import type { PostList } from "@/@types/post";
import { fetchMicroCMS } from "./api";

export default async function getPostIds(): Promise<PostList> {
  return fetchMicroCMS<PostList>("posts", {
    fields: "id",
  });
}
