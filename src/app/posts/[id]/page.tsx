import Breadcrumb from "@/app/_component/Breadcrumb";
import { Button } from "@/app/_component/Button/Button";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import getPostDetail from "@/app/_lib/getPostDetail";
import getPostIds from "@/app/_lib/getPostIds";
import { format } from "@formkit/tempo";
import parse from "html-react-parser";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "../../_component/Header";
import Tocbot from "./Tocbot";
import styles from "./styles/[id].module.scss";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await getPostDetail(params.id);

  // const previousImage = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL("https://submontane.jp"),
    title: {
      default: `${data.title} | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
      template: `%s | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
    },
    description: `${process.env.SITE_DESCRIPTION}`,
    openGraph: {
      images: [
        `${
          data.keyvisual?.url
            ? data.keyvisual?.url
            : "https://submontane.jp/images/mobile/common/OGP.jpg"
        }`,
        //...previousImage,
      ],
      title: `${data.title} | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
      description: `${process.env.SITE_DESCRIPTION}`,
      url: `https://submontane.jp/posts/${data.id}`,
      siteName: `${process.env.SITE_TITLE}`,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | ${process.env.SITE_TITLE} | ${process.env.SITE_DESCRIPTION}`,
      description: `${process.env.SITE_DESCRIPTION}`,
      images: [
        `${
          data.keyvisual?.url
            ? data.keyvisual?.url
            : "https://submontane.jp/images/mobile/common/OGP.jpg"
        }`,
      ],
    },
    verification: {},
    alternates: {
      canonical: `https://submontane.jp/posts/${data.id}`,
    },
  };
}

export async function generateStaticParams({
  params,
}: { params: { id: string } }) {
  const data = await getPostIds();

  return data.contents.map((item: { id: string }) => ({
    id: item.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const data = await getPostDetail(params.id);

  return (
    <>
      <div className="is-blog">
        <Header />
      </div>
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "トップ",
          },
          {
            pathname: `${process.env.SITE_URL}posts/`,
            title: "記事一覧",
          },
          {
            pathname: `${process.env.SITE_URL}posts/${params.id}`,
            title: data.title,
          },
        ]}
      />
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
          <ul className={styles.share}>
            <li>
              <div
                className="fb-share-button"
                data-href={`https://submontane.jp/posts/${data.id}`}
                data-layout=""
                data-size=""
              >
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsubmontane.jp%2F&amp;src=sdkpreparse"
                  className="facebook fb-xfbml-parse-ignore"
                >
                  <svg
                    role="img"
                    aria-label="Facebookでシェア"
                    viewBox="0 0 36 36"
                    width={36}
                    height={36}
                  >
                    <use
                      id="facebook"
                      href="/images/mobile/common/ico_fb01.svg#facebook"
                    />
                  </svg>
                </Link>
              </div>
            </li>
            <li>
              <Link
                href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=${encodeURI(
                  data.title,
                )}`}
                className="x twitter-share-button"
                data-show-count="false"
              >
                <svg
                  role="img"
                  aria-label="Xでシェア"
                  viewBox="0 0 32 32"
                  width={32}
                  height={32}
                >
                  <use href="/images/mobile/common/ico_x01.svg#x" />
                </svg>
              </Link>
              <Script async src="https://platform.twitter.com/widgets.js" />
            </li>
            <li>
              <Link
                href={`https://social-plugins.line.me/lineit/share?url=https://submontane.jp/posts/${
                  data.id
                }&text=${encodeURI(data.title)}`}
                className="line"
              >
                <svg
                  role="img"
                  aria-label="LINEでシェア"
                  viewBox="0 0 36 34"
                  width={36}
                  height={34}
                >
                  <use
                    id="line"
                    href="/images/mobile/common/ico_line01.svg#line"
                  />
                  <use
                    id="line-word"
                    href="/images/mobile/common/ico_line01.svg#line-word"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href={`http://b.hatena.ne.jp/add?mode=confirm&url=https://submontane.jp/posts/${data.id}&title=${data.title}`}
                className="hatena hatena-bookmark-button"
                data-hatena-bookmark-layout="basic"
                title="このエントリーをはてなブックマークに追加"
              >
                <svg
                  role="img"
                  aria-label="はてなブックマークでシェア"
                  viewBox="0 0 32 27"
                  width={32}
                  height={27}
                >
                  <use href="/images/mobile/common/ico_hatena01.svg#hatena" />
                </svg>
              </Link>
            </li>
          </ul>
          <Tocbot />
          <div id="body" className={styles.body}>
            {parse(data.content)}
          </div>
        </article>
      </main>
      <Button buttonName="button-blog" label="記事一覧へ戻る" url="/posts/" />
      <div id="fb-root" />
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v19.0"
        nonce="Nw2FbKjd"
      />
      <Conversion />
      <Footer />
    </>
  ); //<div>My Post: {data.title}</div>;
}
