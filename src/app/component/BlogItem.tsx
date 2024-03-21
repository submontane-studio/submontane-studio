import { format, parse } from "@formkit/tempo";
import { headers } from "next/headers";
import Link from "next/link";
import styles from "../styles/home.module.scss";

type Item = {
  id: string;
  publishedAt: string;
  updatedAt?: string;
  title: string;
  category: object;
  keyvisual: {
    url: URL;
  };
};

export default async function BlogItem() {
  const res = await fetch(
    "https://submontane.microcms.io/api/v1/posts?limit=3",
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  return <code>{JSON.stringify(data)}</code>;
}
