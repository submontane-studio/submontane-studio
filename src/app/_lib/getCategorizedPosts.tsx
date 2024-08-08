export default async function getCategorizedPosts(id: string) {
  const res = await fetch(
    `${process.env.MICROCMS_API_URL}posts?filters=category%5Bequals%5D${id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
      next: { revalidate: 3600 },
    },
  );

  const data = await res.json();

  return data;
}
