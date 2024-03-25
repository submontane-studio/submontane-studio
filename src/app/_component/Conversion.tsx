import styles from "../styles/home.module.scss";
import { Contact } from "./Button/Button";

export default function Conversion() {
  return (
    <section className="conversion">
      <h2>
        <em>お見積り・お問い合わせ</em>は<em>こちら</em>
      </h2>
      <div className="txt">
        <p>
          お困りの際は、お気軽にご相談ください
          <br />
          お問い合わせはこちらからお願いいたします
        </p>
      </div>
      <Contact label="お問い合わせ" isNav={false} />
    </section>
  );
}
