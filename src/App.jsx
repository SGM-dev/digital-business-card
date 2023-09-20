import React from "react";

import Information from "../src/Information.jsx";
import About from "../src/About.jsx";
import Interests from "../src/Interests.jsx";
import Footer from "../src/Footer.jsx";

export default function App() {
  return (
    <div className="container">
      <Information />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
