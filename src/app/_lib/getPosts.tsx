export default async function getPosts() {
  const res = await fetch(`${process.env.MICROCMS_API_URL}posts`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
    },
  });

  const data = await res.json();

  return data;
}
