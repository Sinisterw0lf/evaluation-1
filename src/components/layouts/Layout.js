import React from "react";

import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import SidePage from "../SidePage/SidePage";

export default function Layout({ children }) {
  return ( 
    <div className=" w-screen h-screen">
      <Navigation />
      <main className="container mx-0 px-5 md:flex ">
        <SidePage />
        <div>{children}</div>
      </main>

      <Footer />
    </div>
  );
}
