export default async function getSearchResults(query: string) {
  const res = await fetch(
    `${process.env.MICROCMS_API_URL}posts?limit=9&q=${query}`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      },
    },
  );

  const data = await res.json();

  return data;
}
