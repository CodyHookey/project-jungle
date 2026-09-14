import React from "react";

import SportFishing from "../../public/sport-fishing.jpg";
import Survival from "../../public/survival.webp";
import Medicine from "../../public/medicine.jpeg";
import Kambo from "../../public/kambo.webp";

class Experiences extends React.Component {
  render() {
    return (
      <section id="experiences">
        <div className="container py-5 text-center">
          <h3 className="mb-3">Discover Our Specialised Amazon Experiences</h3>
          <p className="mb-5">
            Go beyond traditional rainforest tours and discover the
            extraordinary experiences waiting for you along the Yavarí River.
            From exciting sport fishing adventures to immersive jungle skills
            and transformative cultural experiences, our specialized expeditions
            are designed for travelers looking for something truly unique. Each
            experience is accompanied by knowledgeable local guides with deep
            connections to the rainforest and its traditions.
          </p>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="custom-border p-3 w-100 h-100">
                <img
                  src={SportFishing}
                  alt=""
                  className="mb-3 img-fluid inner"
                />
                <h5>Elite Sport Fishing Expedition - 5 Days</h5>
                <p>
                  Explore the remote Yavarí River and secluded lagoons in search
                  of legendary Peacock Bass (Tucunaré) and other powerful
                  Amazonian fish through thrilling, responsible
                  catch-and-release fishing.
                </p>
                <button className="btn custom-btn w-100 inner">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="custom-border p-3 w-100 h-100">
                <img src={Survival} alt="" className="mb-3 img-fluid inner" />
                <h5>Amazon Rainforest Survival Expedition - 6 Days</h5>
                <p>
                  Discover traditional rainforest living with experienced local
                  guides, learning essential jungle skills such as finding
                  water, building shelters, identifying useful plants, preparing
                  food, and navigating by natural signs.
                </p>
                <button className="btn custom-btn w-100 inner">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="custom-border p-3 w-100 h-100">
                <img src={Medicine} alt="" className="mb-3 img-fluid inner" />
                <h5>Amazon Plant Medicine Retreat - 4 Days</h5>
                <p>
                  Experience the Amazon through traditional plant-medicine
                  practices and ancestral cultural knowledge, guided by
                  respected local practitioners in a safe, respectful, and
                  carefully prepared environment.
                </p>
                <button className="btn custom-btn w-100 inner">
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="custom-border p-3 w-100 h-100">
                <img src={Kambo} alt="" className="mb-3 img-fluid inner" />
                <h5>Traditional Kambo Experience - 4 Days</h5>
                <p>
                  Discover the ancestral traditions surrounding Kambo, learning
                  about its history, cultural significance, and ceremonial
                  practices through experienced local practitioners in a
                  carefully prepared environment.
                </p>
                <button className="btn custom-btn w-100 inner">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experiences;
