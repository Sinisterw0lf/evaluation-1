import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import SidePage from "../SidePage/SidePage";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <SidePage/>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
