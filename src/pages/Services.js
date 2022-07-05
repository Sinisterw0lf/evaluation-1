import React from "react";
import Layout from "../components/layouts/Layout";
import ServicesButton from "../components/ServicesPage/ServicesButton";
import ServicesCard from "../components/ServicesPage/ServicesCard";
import ServicesTitle from "../components/ServicesPage/ServicesTitle";

export default function Services() {
  return (
    <Layout>
      <div className="bg-accent-lightest ">
        <ServicesTitle />
        <div className="block md:flex px-5  md:px-10">
          <ServicesCard
            src="reveil.webp"
            alt="blue clock"
            title="Développement de site web"
            descriptionTitle="La création de site web est indispensable pour améliorer la visibilité de ses activités. Le développement de votre site web est réalisé avec soin et répond aux standards weeb de W3C."
          />

          <ServicesCard
            src="blocnote.webp"
            alt="blue notepad"
            title="Maintenance"
            descriptionTitle="Un site internet en bonne santé est un site internet mis à jour. Les forfaits de maintenance proposés sont le fruit d'années d'éxpérience et des solutions apportées à mes clients afin de garantir un site internet performant et fiable."
          />

          <ServicesCard
            src="panneau.webp"
            alt="blue sign"
            title="Référencement (SEO)"
            descriptionTitle="Votre site in ternet est développé avec pour objectif d'apparaître dans les premières pages sur les moteurs de recherche."
          />
        </div>
        <ServicesButton/>
      </div>
    </Layout>
  );
}
