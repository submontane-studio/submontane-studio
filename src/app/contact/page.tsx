import { Metadata } from "next";
import Breadcrumb from "../_component/Breadcrumb";
import Conversion from "../_component/Conversion";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Form from "./_component/Form";
import styles from "./styles/contact.module.scss";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <form data-static-form-name="contact">
        <div>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Message
            <textarea name="message" />
          </label>
        </div>
        <button type="submit">Send!</button>
      </form>
    </>
  );
}
