import React from "react";

import HeroSection from "../sections/hero";
import About from "../sections/about";
import Tours from "../sections/tours";
import Experiences from "../sections/experiences";

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <About />
        <Tours />
        <Experiences />
      </>
    );
  }
}

export default Home;
