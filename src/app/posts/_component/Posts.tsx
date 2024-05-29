import type { CategoryListType } from "@/@types/category";
import type { PostList } from "@/@types/post";
import { Button } from "@/app/_component/Button/Button";
import Header from "@/app/_component/Header";
import { format } from "@formkit/tempo";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/posts.module.scss";

export default function Posts({
  data,
  className = "",
}: { data: PostList; className?: string }) {
  return (
    <>
      {data.contents.length !== 0 ? (
        <ul className={`${styles.posts}${className && ` ${className}`}`}>
          {data.contents.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <p className={`category is-${post.category.id}`}>
                  {post.category.name}
                </p>
                <div className="keyvisual">
                  <Image
                    src={
                      post.keyvisual
                        ? post.keyvisual.url
                        : "/images/mobile/common/empty_keyvisual.png"
                    }
                    alt=""
                    sizes="100vw"
                    fill={true}
                  />
                </div>
                <div className="body">
                  <div className="date">
                    <p className="published">
                      <time
                        dateTime={format(post.publishedAt, "YYYY-MM-DD")}
                        aria-label={format(
                          post.publishedAt,
                          "公開日 YYYY年MM月DD日",
                        )}
                      >
                        {format(post.publishedAt, "YYYY.MM.DD")}
                      </time>
                    </p>
                    <p className="updated">
                      <time
                        dateTime={format(post.updatedAt, "YYYY-MM-DD")}
                        aria-label={format(
                          post.updatedAt,
                          "更新日 YYYY年MM月DD日",
                        )}
                      >
                        {format(post.updatedAt, "YYYY.MM.DD")}
                      </time>
                    </p>
                  </div>
                  <h2>{post.title}</h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className={styles.notfound}>
            <Image
              src="/images/mobile/posts/ico_notfound.svg"
              alt=""
              width={80}
              height={80}
            />
            <p>記事が見つかりませんでした。</p>
          </div>
          <Button
            label="記事一覧へ戻る"
            url="/posts/"
            buttonName="back-index"
          />
        </>
      )}
    </>
  );
}
