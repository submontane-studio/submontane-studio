import type { Post } from "@/@types/post";
import {
  formatDate,
  formatDateForHTML,
  formatDateWithLabel,
} from "@/app/_lib/utils/date";
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  post: Post;
  showCategory?: boolean;
  showUpdatedDate?: boolean;
  className?: string;
};

export default function PostCard({
  post,
  showCategory = true,
  showUpdatedDate = true,
  className = "",
}: PostCardProps) {
  return (
    <li className={className}>
      <Link href={`/posts/${post.id}`}>
        {showCategory && (
          <p className={`category is-${post.category.id}`}>
            {post.category.name}
          </p>
        )}
        <div className="keyvisual">
          <Image
            src={
              post.keyvisual?.url ||
              "/images/desktop/common/empty_keyvisual.png"
            }
            alt=""
            fill={true}
            sizes="(max-width: 640px) 100vw, 33.33%"
          />
        </div>
        <div className="date">
          <p className="published">
            <time
              dateTime={formatDateForHTML(post.publishedAt)}
              aria-label={formatDateWithLabel(post.publishedAt, "公開日")}
            >
              {formatDate(post.publishedAt)}
            </time>
          </p>
          {showUpdatedDate && post.updatedAt && (
            <p className="updated">
              <time
                dateTime={formatDateForHTML(post.updatedAt)}
                aria-label={formatDateWithLabel(post.updatedAt, "更新日")}
              >
                {formatDate(post.updatedAt)}
              </time>
            </p>
          )}
        </div>
        <h3>{post.title}</h3>
      </Link>
    </li>
  );
}
