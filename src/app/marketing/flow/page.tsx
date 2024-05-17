import Breadcrumb from "@/app/_component/Breadcrumb";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import Heading from "@/app/_component/Heading/Heading";
import { Metadata } from "next";
import styles from "./styles/flow.module.scss";

export const metadata: Metadata = {
  title: "ご依頼の流れ",
};

export default function Flow() {
  return (
    <>
      <div className="inpage-heading">
        <Header />
        <h1>ご依頼の流れ</h1>
      </div>
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "ホーム",
          },
          {
            pathname: `${process.env.SITE_URL}marketing/`,
            title: "Webマーケティング",
          },
          {
            pathname: `${process.env.SITE_URL}marketing/features/`,
            title: "ご依頼の流れ",
          },
        ]}
      />
      <main>
        <section id="flow" className={styles.flow}>
          <Heading>ご依頼の流れ</Heading>
          <div className="intro">
            <p>
              まだWebサイトをお持ちでないお客さまからご依頼の場合の公開・保守・管理までの例をご紹介しています。
              <br />
              場合によっては下記の他にヒアリングやお打ち合わせをさらに数回お願いする場合もございます。
            </p>
          </div>
          <ol className={styles.chart}>
            <li className="together">
              <h3>お客さまからのご依頼</h3>
              <div className="txt">
                <p>
                  お客さまのご依頼後、数日で返信させていただき、ヒアリングの日時を設定いたします。
                </p>
              </div>
            </li>
            <li className="together">
              <h3>ご要望のヒアリング</h3>
              <div className="txt">
                <p>
                  お客さまのご要望をヒアリングさせていただきます。
                  <br />
                  どのようなデザインがお好みか、作成する際のシステムはどのようなものがいいかなど、詳しくお伺いさせていただきます。
                </p>
              </div>
            </li>
            <li className="together">
              <h3>マーケティング施策のご提案</h3>
              <div className="txt">
                <p>
                  ヒアリング内容を元に、どのような施策が良いかご提案させていただきます。
                  <br />
                  Webサイトを作成する場合ももちろん、1からWebサイトを作成せずにホームページ作成サービスを使用してコストを抑える手法や、Webサイトを作成せずにSNS上でのマーケティングに集中させた方が費用対効果が高い場合など、さまざまな状況に合わせてご提案させていただきます。
                </p>
              </div>
            </li>
            <li className="my-turn">
              <h3>Webサイトデザイン制作</h3>
              <div className="txt">
                <p>
                  ご提案を了承いただければ、実際のWebサイトの制作に入ります。
                  <br />
                  通常はラフデザインをまずご確認いただき、制作するWebサイトの構成を把握していただいた後、デザインカンプを制作いたします。
                  <br />
                  ラフデザインの段階でご納得いただける内容でなければ、さらに修正を行います。
                </p>
              </div>
            </li>
            <li className="together">
              <h3>デザインのご確認</h3>
              <div className="txt">
                <p>
                  最終的に完成したデザインカンプをご確認いただきます。
                  <br />
                  デザイン面でご要望や不明点がある場合はさらに修正を行う場合があります。
                </p>
              </div>
            </li>
            <li className="my-turn">
              <h3>Webサイト構築</h3>
              <div className="txt">
                <p>
                  デザインが完了すれば、そのデザインをWebサイトに落とし込む構築作業を行います。
                </p>
              </div>
            </li>
            <li className="together">
              <h3>
                Webサイトご確認・
                <br />
                システム使用方法レクチャー
              </h3>
              <div className="txt">
                <p>
                  構築された実際のWebサイトをご確認いただきながら、更新にシステムを使用している場合は使用方法のレクチャーを行います。
                  <br />
                  マニュアルも同時にお渡しいたしますので、ゆっくりとご確認いただき、ご不明点などがある場合はご質問ください。
                </p>
              </div>
            </li>
            <li className="release">
              <h3>公開</h3>
              <div className="txt">
                <p>
                  Webサイトをご確認いただき、システムの使用方法のレクチャーが終了すれば、実際に公開となります。
                </p>
              </div>
            </li>
            <li className="together">
              <h3>保守・管理・運用</h3>
              <div className="txt">
                <p>
                  その後の効果を測定し、必要に応じてWebサイト構成の組み替えや広告の出稿などをご提案いたします。
                  <br />
                  長期に渡ってのサポートをご要望の場合は、月々・半年・1年の単位での保守管理費にて承ります。
                </p>
              </div>
            </li>
          </ol>
        </section>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
