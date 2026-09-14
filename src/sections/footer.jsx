import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="dark-custom-bg text-white py-5 text-center text-md-start">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-white fw-bold">EcoAmazon - Tours</h5>
            <p className="text-white">
              Authentic Amazon adventures through wildlife, rainforest, and
              local culture.
            </p>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div className="">
              <h6 className="text-white fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#tours" className="text-white text-decoration-none">
                    Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#experiences"
                    className="text-white text-decoration-none"
                  >
                    Specialised Experiences
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="text-white fw-bold">Contact</h6>
            <p>
              <a
                href="tel:+51919900200"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faPhone} className="me-2" /> +51 919 900
                200
              </a>
            </p>
            <p>
              <a
                href="mailto:info@ecoamazontours.com"
                className="text-white text-decoration-none"
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@ecoamazontours.com
              </a>
            </p>
          </div>
        </div>

        <hr />

        <p className="text-center mb-0 text-white">
          © 2026 EcoAmazon Tours. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
