import type { PostList } from "@/@types/post";
import { fetchMicroCMS } from "./api";

export default async function getSearchResults(
  query: string,
): Promise<PostList> {
  // クエリパラメータは fetchMicroCMS 内で自動的にエンコードされる
  return fetchMicroCMS<PostList>("posts", {
    limit: "9",
    q: query,
  });
}
