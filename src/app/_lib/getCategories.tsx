export default async function getCategories() {
  const res = await fetch(`${process.env.MICROCMS_API_URL}categories`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
    },
  });

  const data = await res.json();

  return data;
}
