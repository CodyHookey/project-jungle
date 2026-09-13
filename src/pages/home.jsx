import React from "react";

import HeroSection from "../sections/hero";
import About from "../sections/about";
import Tours from "../sections/tours";

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <About />
        <Tours />
      </>
    );
  }
}

export default Home;
