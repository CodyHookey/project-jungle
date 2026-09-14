import React from "react";

import HeroImage from "../assets/hero.png";
import NavBar from "../components/navbar";

function HeroSection() {
  return (
    <section
      className="vh-100 d-flex flex-column"
      id="hero-img"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <NavBar />
      <div className="container text-white px-5 my-auto">
        <div className="row">
          <div className="col-12 col-lg-7">
            <h1 className="mb-5">Discover the Wild Heart of the Amazon</h1>
            <h4 className="fw-bold text-white mb-3">EcoAmazon Tours</h4>
            <p className="text-white">
              Journey deep into one of the world's most extraordinary
              ecosystems. Explore winding rivers, encounter incredible wildlife,
              and experience the rainforest through the eyes of local guides.
            </p>

            <div className="d-flex">
              <a href="#tours" className="btn custom-btn me-3 inner-rd px-4">
                Explore Our Tours
              </a>
              <a href="#experiences" className="btn custom-btn inner-rd px-4">
                View Our Experiences
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
