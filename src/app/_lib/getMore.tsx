"use server";

import type { Post } from "@/@types/post";
import { fetchMicroCMS } from "./api";

export type GetMoreResult = {
  posts: Post[];
  totalCount: number;
};

export default async function getMore(
  limit: number,
  offset: number,
): Promise<GetMoreResult> {
  const data = await fetchMicroCMS<{ contents: Post[]; totalCount: number }>(
    "posts",
    {
      limit: String(limit),
      offset: String(offset),
    },
  );

  return {
    posts: data.contents,
    totalCount: data.totalCount,
  };
}
