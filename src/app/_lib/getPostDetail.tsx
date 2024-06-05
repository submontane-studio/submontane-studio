import { cache } from "react";

export default async function getPostDetail(id: string) {
  const res = await fetch(`${process.env.MICROCMS_API_URL}posts/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
    },
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}
