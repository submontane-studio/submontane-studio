import Breadcrumb from "@/app/_component/Breadcrumb";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import Heading from "@/app/_component/Heading/Heading";
import { Metadata } from "next";
import styles from "./styles/features.module.scss";

export const metadata: Metadata = {
  title: "特長",
};

export default function Features() {
  return (
    <>
      <div className="inpage-heading">
        <Header />
        <h1>特長</h1>
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
            title: "特長",
          },
        ]}
      />
      <main>
        <section id="reason" className={styles.reason}>
          <Heading>選ばれる理由</Heading>
          <ol className={styles["reason-list"]}>
            <li>
              <h3>
                お客さまの状況に合わせた
                <br />
                ご提案
              </h3>
              <div className="txt">
                <p>
                  当事務所では、お客さまの状況に合わせたご提案を行っております。
                  <br />
                  Webサイトの作成をご要望の場合でも、Webサイトを作成するより、SNSを使用してマーケティングを行なっていく方が費用対効果が高い場合など、ご要望に反する場合でも、最終的にお客さまの利益となると判断した場合、積極的に提案を行っています。
                </p>
              </div>
            </li>
            <li>
              <h3>
                一貫した担当による
                <br />
                手厚いサポート体制
              </h3>
              <div className="txt">
                <p>
                  当事務所は、お客様へのヒアリングからディレクション、デザイン、コーディングまで、一貫して1人の担当者が担当いたします。
                  <br />
                  そのため、お客様のご要望を素早く正確に把握し、適切なサポートを提供することが可能です。
                </p>
                <p className="notes">
                  <small>
                    案件によっては、他のプログラマーなどへの協力を求める場合がございます
                  </small>
                </p>
              </div>
            </li>
            <li>
              <h3>
                UXとアクセシビリティを
                <br />
                優先したデザイン
              </h3>
              <div className="txt">
                <p>
                  たとえどれほどカッコいいデザインであっても、幅広く誰もが快適に閲覧できるデザインでなければ意味がありません。
                  <br />
                  当事務所ではUXとアクセシビリティをデザインやコーディングを行う上で最も重視しており、UXとアクセス性の高いWebサイトを提供しています。
                </p>
              </div>
            </li>
            <li>
              <h3>トレンドも踏まえたSEO対策</h3>
              <div className="txt">
                <p>
                  これまで高い表示順位を保っていたサイトが、検索エンジンのアップデートによって大きく表示順位を落とす、ということがままあります。
                  <br />
                  当事務所ではそのような検索エンジンのアップデートや各SNSのシェアなど最新の業界情報も踏まえて、SEO対策や広告出稿のご提案を行なっています。
                </p>
              </div>
            </li>
          </ol>
        </section>
        <section id="pillar" className={styles.pillar}>
          <Heading>3つの柱</Heading>
          <div className="intro">
            <p>
              当事務所では、以下の3つの要素を重視し、業務を行っています。
              <br />
              どれか1つが欠けてもいい結果は生まれないと考えています。
              <br />
              すべてが揃ってこそ、お客さまにご満足いただける結果が得られるのです。
            </p>
          </div>
          <div className={styles.inner}>
            <picture className={styles.graph}>
              <source
                media="(min-width: 768px)"
                srcSet="/images/desktop/marketing/features/graph.svg"
              />
              <img
                src="/images/mobile/marketing/features/graph.svg"
                alt="UX、アクセシビリティ、SEOの3つの柱"
              />
            </picture>
            <ul className={styles["pillar-list"]}>
              <li className="ux">
                <h3>UX</h3>
                <div className="txt">
                  <p>
                    UX（User eXperience :
                    ユーザーがサービスを通じて得られる体験）は、マーケティング上でも重要な要素です。
                    <br className="is-breakSp" />
                    UXが優れていなければユーザーはお客さまが求めるお問い合わせや資料請求などの手続きまでたどり着くことなくWebサイトを離れてしまいます。
                    <br />
                    優れたUXを実現するには、パーツの1つ1つまでこだわってデザイン・設計する必要があり、技術と知識が必要です。
                    <br />
                    当事務所では10年以上のWeb制作経験からくる知識と技術を活かして、優れたUXのWebサイトをご提供できます。
                  </p>
                </div>
              </li>
              <li className="a11y">
                <h3>アクセシビリティ</h3>
                <div className="txt">
                  <p>
                    たとえデザインやUXが優れていても、健常者の方しか閲覧できないのでは、優れたWebサイトとはいえません。
                    <br className="is-breakSp" />
                    障害を持つ方がアクセスできなければ、潜在的な顧客を取りこぼすことになってしまいます。
                    <br />
                    当事務所では、読みやすいUDフォントの使用、色覚に障害を持つ方でも見やすいデザイン、適切なマークアップ、アクセシビリティの標準仕様であるWCAG、WAI-ARIAの使用などの様々な施策によって、アクセシビリティを最大化させています。
                  </p>
                </div>
              </li>
              <li className="support">
                <h3>サポート</h3>
                <div className="txt">
                  <p>
                    お客さまへのサポートはこの中でも最も重要と言ってもいいでしょう。
                    <br className="is-breakSp" />
                    当事務所では制作・提案を一貫して1人が担当し、コミュニケーションロスによるお客さまとのすれ違いや対応の遅延などを最小化し、素早く適切なサポートを実現しています。
                    <br />
                    また、公開後も必要であれば引き続き保守・管理を請け負い、更新作業の代行など、お客さまのご要望を可能な限り実現します。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
