import Image from "next/image";
import styles from "../styles/home.module.scss";
import ServiceItem from "./ServiceItem";

const services = [
  {
    icon: {
      url: "/images/mobile/home/ico_web01.svg",
      width: 29,
      height: 24,
    },
    slug: "web",
    heading: "Webサイト制作",
    description:
      "どんな環境やハンディキャップをお持ちの方でも閲覧しやすい、アクセシビリティの高いWebサイトを制作いたします",
    contract: false,
  },
  {
    icon: {
      url: "/images/mobile/home/ico_sns01.svg",
      width: 25,
      height: 24,
    },
    slug: "sns",
    heading: "SNS運用支援",
    description:
      "今、流行している最新のサービスから定番のサービスまで、幅広く運用の支援をいたします。",
    contract: false,
  },
  {
    icon: {
      url: "/images/mobile/home/ico_outsourcing01.svg",
      width: 31,
      height: 23,
    },
    slug: "outsourcing",
    heading: "アウトソーシング請負",
    description:
      "どんな環境やハンディキャップをお持ちの方でも閲覧しやすい、アクセシビリティの高いWebサイトを制作いたします",
    contract: false,
  },
  {
    icon: {
      url: "/images/mobile/home/ico_search01.svg",
      width: 24,
      height: 24,
    },
    slug: "seo",
    heading: "SEO対策",
    description:
      "検索エンジンの上位に表示されるよう、システム内部や運用にて対策を行います。",
    contract: true,
  },
  {
    icon: {
      url: "/images/mobile/home/ico_manage01.svg",
      width: 26,
      height: 20,
    },
    slug: "management",
    heading: "保守・管理",
    description:
      "サイトにまつわる保守・管理作業をおこないます。突然、サイトが見れなくなった、などのトラブルを防止します。",
    contract: true,
  },
  {
    icon: {
      url: "/images/mobile/home/ico_advertise01.svg",
      width: 24,
      height: 25,
    },
    color: "#FF6161",
    slug: "advertise",
    heading: "広告出稿代行",
    description:
      "検索エンジン広告やアフィリエイト広告などへの出稿代行いたします。",
    contract: true,
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <ul className={styles["services-list"]}>
        {services.map((services) => (
          <ServiceItem
            key={services.slug}
            slug={services.slug}
            isContract={services.contract}
          >
            <div className="heading">
              <div className="icon">
                <Image
                  src={services.icon.url}
                  alt={services.heading}
                  width={services.icon.width}
                  height={services.icon.height}
                />
              </div>
              <h2>{services.heading}</h2>
            </div>
            <div className="description">
              <p>{services.description}</p>
            </div>
          </ServiceItem>
        ))}
      </ul>
    </section>
  );
}
