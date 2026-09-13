import React from "react";

import HeroSection from "../sections/hero";
import About from "../sections/about";

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroSection />
        <About />
      </>
    );
  }
}

export default Home;
