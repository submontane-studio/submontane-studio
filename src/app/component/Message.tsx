import styles from "../styles/home.module.scss";

export default function Message() {
  return (
    <section className={styles.message}>
      <h2>すべての人に、すべての情報を</h2>
      <div className="txt">
        <p>
          インターネットはすでに生活に欠かせないライフラインとなり、必要な情報をスマートフォンやPCですぐに手に入れることができるようになりました。
        </p>
        <p>
          しかし、色覚・視覚に障害を持つ方や、身体に障害を持つ方に寄り添った設計になっているWebサイトは多くはありません。
        </p>
        <p>
          当事務所、SUBMONTANE
          STUDIOは、それらの障害を持つ方々でも、健常者と同じぐらい簡単で、すばやく必要な情報を入手できるよう、設計段階からアクセシビリティを重視しております。
        </p>
        <p>
          例え、どんな状況にあろうとも簡単にアクセスでき、必要な情報を手に入れられるWebマーケティングを目指して、日々活動しております。
        </p>
      </div>
    </section>
  );
}
