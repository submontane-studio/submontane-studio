import type { Post } from "@/@types/post";
import { cache } from "react";
import { fetchMicroCMS } from "./api";

export default cache(async function getPostDetail(id: string): Promise<Post> {
  return fetchMicroCMS<Post>(`posts/${id}`, undefined, {
    next: { revalidate: 3600 },
  });
});
