import styles from "../styles/home.module.scss";
import BlogItem from "./BlogItem";

export default function Blog() {
  return (
    <section className={styles.blog}>
      <h2>新着記事一覧</h2>
      <BlogItem />
    </section>
  );
}
