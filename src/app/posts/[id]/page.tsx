export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://submontane.microcms.io/api/v1/posts/${params.id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  return <div>My Post: {data.title}</div>;
}
