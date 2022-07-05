import React from "react";
import ContactDescription from "../components/ContactPage/ContactDescription";
import ContactFormulaire from "../components/ContactPage/ContactFormulaire";
import ContactTitle from "../components/ContactPage/ContactTitle";
import Layout from "../components/layouts/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-accent-lightest">
        <ContactTitle />
        <ContactDescription/>
        <ContactFormulaire/>
      </div>
    </Layout>
  );
}
