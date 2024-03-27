import Header from "../../_component/Header";

export default async function Post({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://submontane.microcms.io/api/v1/posts/${params.id}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  return (
    <div className="is-blog">
      <Header />
      {data.title}
    </div>
  ); //<div>My Post: {data.title}</div>;
}
