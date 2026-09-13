import React from "react";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/EcoAmazon_logo_white.png";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg d-block box-shadow-two`}>
        <div className="container position-relative">
          <a
            className="navbar-brand monsieur-la-doulaise-regular text-white fw-bold d-flex align-items-center"
            href="/"
          >
            <img src={Logo} className="img-fluid me-2" alt="" width={"100px"} />
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav position-absolute top-50 start-50 translate-middle d-none d-lg-flex">
              <li className="nav-item me-4">
                <a className="nav-link custom-link text-white fw-bold" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className="nav-link custom-link text-white fw-bold"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className="nav-link custom-link text-white fw-bold"
                  href="#tours"
                >
                  Tours
                </a>
              </li>
              <li className="nav-item me-4">
                <a
                  className="nav-link custom-link text-white fw-bold"
                  href="#experiences"
                >
                  Specialized Experiences
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <div className="d-lg-none">
                <li className="nav-item me-4">
                  <a
                    className="nav-link custom-link text-white fw-bold"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a
                    className="nav-link custom-link text-white fw-bold"
                    href="#about"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a
                    className="nav-link custom-link text-white fw-bold"
                    href="#tours"
                  >
                    Tours
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a
                    className="nav-link custom-link text-white fw-bold"
                    href="#experiences"
                  >
                    Specialized Experiences
                  </a>
                </li>
                <hr />
              </div>
              <li className="nav-item me-3">
                <a
                  href="tel:+51919900200"
                  className="d-flex align-items-center custom-action-link text-white text-decoration-none"
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> +51 919
                  900 200
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
