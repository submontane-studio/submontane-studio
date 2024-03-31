"use client";

import * as ReactDOMServer from "react-dom/server";
import getMore from "./getMore";

export default async function appendPosts(limit: number, offset: number) {
  const data = await getMore(limit, offset);

  const html = ReactDOMServer.renderToStaticMarkup(data.jsx);

  document.getElementById("js-posts")?.insertAdjacentHTML("beforeend", html);

  if (offset < data.totalCount) {
    document.querySelector(".more")?.classList.add("is-disabled");
  }
}
