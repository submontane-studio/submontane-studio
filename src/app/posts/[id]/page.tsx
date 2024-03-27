import { format, parse } from "@formkit/tempo";
import Image from "next/image";
import Script from "next/script";
import Header from "../../_component/Header";
import styles from "./styles/[id].module.scss";

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
    <>
      <div className="is-blog">
        <Header />
      </div>
      <main>
        <article id={data.id}>
          <div className={styles.heading}>
            <div className="title">
              <div className="date">
                <p className="published">
                  <time
                    dateTime={format(data.publishedAt, "YYYY-MM-DD")}
                    aria-label={format(
                      data.publishedAt,
                      "公開日 YYYY年MM月DD日",
                    )}
                  >
                    {format(data.publishedAt, "YYYY.MM.DD")}
                  </time>
                </p>
                <p className="updated">
                  <time
                    dateTime={format(data.updatedAt, "YYYY-MM-DD")}
                    aria-label={format(data.updatedAt, "更新日 YYYY年MM月DD日")}
                  >
                    {format(data.updatedAt, "YYYY.MM.DD")}
                  </time>
                </p>
              </div>
              <h1>{data.title}</h1>
            </div>
            <p className={`category is-${data.category.id}`}>
              {data.category.name}
            </p>
          </div>
          <div className={styles.keyvisual}>
            <Image
              src={
                data.keyvisual?.url
                  ? data.keyvisual.url
                  : "/images/mobile/common/mohammad-alizade-XgeZu2jBaVI-unsplash.jpg"
              }
              fill={true}
              sizes="100vw"
              alt=""
            />
          </div>
          <ul className="share">
            <li>
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-show-count="false"
              >
                Tweet
              </a>
              <Script async src="https://platform.twitter.com/widgets.js" />
            </li>
          </ul>
          <section className="body">{data.content}</section>
        </article>
      </main>
    </>
  ); //<div>My Post: {data.title}</div>;
}
