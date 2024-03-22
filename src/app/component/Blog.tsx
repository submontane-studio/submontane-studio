import styles from "../styles/home.module.scss";
import BlogItem from "./BlogItem";
import { ButtonWhite } from "./button/Button";

export default function Blog() {
  return (
    <section className={styles.blog}>
      <h2>新着記事一覧</h2>
      <BlogItem />
      <ButtonWhite label="他の記事を見る" url="/posts" />
    </section>
  );
}
