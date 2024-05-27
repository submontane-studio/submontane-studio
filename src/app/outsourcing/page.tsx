import { Metadata } from "next";
import Breadcrumb from "../_component/Breadcrumb";
import Conversion from "../_component/Conversion";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Heading from "../_component/Heading/Heading";
import styles from "./styles/outsourcing.module.scss";

export const metadata: Metadata = {
  title: "アウトソーシング",
};

export default function Outsourcing() {
  return (
    <>
      <div className="inpage-heading">
        <Header />
        <h1>アウトソーシング</h1>
      </div>
      <Breadcrumb
        items={[
          {
            pathname: `${process.env.SITE_URL}`,
            title: "ホーム",
          },
          {
            pathname: `${process.env.SITE_URL}outsourcing/`,
            title: "アウトソーシング",
          },
        ]}
      />
      <main>
        <section id="outsourcing" className={styles.outsourcing}>
          <Heading>アウトソーシング</Heading>
          <div className="intro">
            <p>
              慢性的なリソース不足や、年末年始などの繁忙期でのリソース不足に悩むWeb制作会社さまに、当事務所ではアウトソーシング（外注）としてリソースを提供しております。
              <br />
              Webサイト全体の制作から、デザイン・コーディングなどの制作工程のみのご依頼など、制作会社さまのご要望に合わせてフレキシブルに対応いたします。
            </p>
          </div>
          <picture className={styles.image}>
            <source
              srcSet="/images/desktop/outsourcing/img_outsourcing01.svg"
              type="image/svg+xml"
              media="(min-width: 768px)"
            />
            <img
              src="/images/mobile/outsourcing/img_outsourcing01.svg"
              alt="デザイン・コーディングの作業を当事務所が請け負うことで、別の業務を行なえます"
              loading="lazy"
            />
          </picture>
        </section>
      </main>
      <Conversion />
      <Footer />
    </>
  );
}
