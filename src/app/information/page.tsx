import Breadcrumb from "@/app/_component/Breadcrumb";
import Conversion from "@/app/_component/Conversion";
import Footer from "@/app/_component/Footer";
import Header from "@/app/_component/Header";
import Heading from "@/app/_component/Heading/Heading";
import { Metadata } from "next";
import styles from "./styles/information.module.scss";

export const metadata: Metadata = {
  title: "事務所概要",
};

export default function Flow() {
  return (
    <>
      <div className="inpage-heading">
        <Header />
        <h1>事務所概要</h1>
      </div>
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "ホーム",
          },
          {
            pathname: `${process.env.SITE_URL}information/`,
            title: "事務所概要",
          },
        ]}
      />
      <main>
        <div id="information" className={styles.information}>
          <div className="intro">
            <p>
              SUBMONTANE STUDIOは、Webデザイナー・フロントエンドエンジニアの山下
              剛のフリーランス事務所です。
              <br />
              Webデザイン・サイト構築はもちろん幅広いお仕事をお請けしております。
            </p>
          </div>
          <table className="office">
            <tbody>
              <tr>
                <th>商号</th>
                <td>SUBMONTANE STUDIO</td>
              </tr>
              <tr>
                <th>代表者名</th>
                <td>山下 剛</td>
              </tr>
              <tr>
                <th>創業</th>
                <td>2015年7月1日</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  <address>〒562-0027 大阪府箕面市石丸2-8-4</address>
                </td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  <ul>
                    <li>Webサイトの企画・制作・運用</li>
                    <li>ソーシャルネットワークサービスの登録代行・運用支援</li>
                    <li>Webコンサルティング</li>
                    <li>自事務所サイトの運用及びブログ記事制作</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
