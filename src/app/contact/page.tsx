import { Metadata } from "next";
import Conversion from "../_component/Conversion";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import styles from "./styles/contact.module.scss";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function Contact() {
  return (
    <>
      <div className="is-inpage">
        <Header />
        <h1>{metadata.title?.toString() || ""}</h1>
      </div>
      <Conversion />
      <Footer />
    </>
  );
}
