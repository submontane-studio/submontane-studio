import { format, parse } from "@formkit/tempo";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "../../_component/Header";
import styles from "./styles/[id].module.scss";

const fetchData = async (id: string) => {
  const res = await fetch(`https://submontane.microcms.io/api/v1/posts/${id}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
    },
  });
  const json = await res.json();

  return json;
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;

  const data = await fetchData(id);

  const previousImage = (await parent).openGraph?.images || [];

  return {
    title: {
      default: `${data.title} | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
      template: `%s | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
    },
    description: `${process.env.SITE_DESCRIPTION}`,
    openGraph: {
      images: [
        ...previousImage,
        ...(typeof searchParams["og:image"] === "string"
          ? [
              {
                url: searchParams["og:image"],
                width: 1200,
                height: 630,
                alt: "",
              },
            ]
          : []),
      ],
      title: `${data.title} | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
      description: `${process.env.SITE_DESCRIPTION}`,
      url: `https://submontane.jp/posts/${id}`,
      siteName: `${process.env.SITE_TITLE}`,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
      description: `${process.env.SITE_DESCRIPTION}`,
      images: [
        ...previousImage,
        {
          url:
            typeof searchParams["og:image"] === "string"
              ? searchParams["og:image"]
              : "/images/mobile/common/OGP.jpg",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    verification: {},
    alternates: {
      canonical: `https://submontane.jp/posts/${id}`,
    },
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const id = params.id;

  const data = await fetchData(id);

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
              <div
                className="fb-share-button"
                data-href={`https://submontane.jp/posts/${id}`}
                data-layout=""
                data-size=""
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsubmontane.jp%2F&amp;src=sdkpreparse"
                  className="fb-xfbml-parse-ignore"
                >
                  <object
                    data="/images/mobile/common/ico_fb01.svg"
                    type="image/svg+xml"
                    name="Facebookでシェア"
                    aria-label="Facebookでシェア"
                  />
                </a>
              </div>
            </li>
            <li>
              <Link
                href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=${encodeURI(
                  data.title,
                )}`}
                className="twitter-share-button"
                data-show-count="false"
              >
                <object
                  data="/images/mobile/common/ico_x01.svg"
                  type="image/svg+xml"
                  name="Xでシェア"
                  aria-label="Xでシェア"
                />
              </Link>
              <Script async src="https://platform.twitter.com/widgets.js" />
            </li>
            <li>
              <Link
                href={`https://social-plugins.line.me/lineit/share?url=https://submontane.jp/posts/${id}&text=${encodeURI(
                  data.title,
                )}`}
              >
                <object
                  data="/images/mobile/common/ico_line01.svg"
                  type="image/svg+xml"
                  name="LINEでシェア"
                  aria-label="LINEでシェア"
                />
              </Link>
            </li>
            <li>
              <Link
                href={`http://b.hatena.ne.jp/add?mode=confirm&url=https://submontane.jp/posts/${id}&title=${data.title}`}
                className="hatena-bookmark-button"
                data-hatena-bookmark-layout="basic"
                title="このエントリーをはてなブックマークに追加"
              >
                <object
                  data="/images/mobile/common/ico_hatena01.svg"
                  type="image/svg+xml"
                  name="はてなブックマークでシェア"
                  aria-label="はてなブックマークでシェア"
                />
              </Link>
            </li>
          </ul>
          <section className="body">{data.content}</section>
        </article>
      </main>
      <div id="fb-root" />
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v19.0"
        nonce="Nw2FbKjd"
      />
    </>
  ); //<div>My Post: {data.title}</div>;
}
