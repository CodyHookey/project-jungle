import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-solid-svg-icons";

function Reviews() {
  return (
    <section>
      <div className="container py-5 text-center">
        <h3 className="mb-5">What Our Guest Explorers Say?</h3>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="custom-border p-4">
              <div className="d-flex justify-content-center mb-4">
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
              </div>
              <p>
                <strong>
                  “An unforgettable experience from start to finish.”
                </strong>{" "}
                The Yavarí felt completely different from anywhere else we
                visited in the Amazon. The sense of remoteness, the incredible
                wildlife, and the peacefulness of the river made this a truly
                special journey. We came looking for adventure and left with
                memories we’ll never forget.
              </p>
              <p>
                <strong>— Sophie & James, United Kingdom</strong>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="custom-border p-4">
              <div className="d-flex justify-content-center mb-4">
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
              </div>
              <p>
                <strong>“The Amazon at its wildest.”</strong> Travelling along
                the Yavarí River was everything we hoped an Amazon adventure
                would be. Every day brought something new, from quiet stretches
                of river to amazing wildlife encounters in the forest. It felt
                authentic, personal, and far away from the crowds.
              </p>
              <p>
                <strong>— Michael R., Canada</strong>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="custom-border p-4">
              <div className="d-flex justify-content-center mb-4">
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
              </div>
              <p>
                <strong>“A genuine connection with the rainforest.”</strong>What
                impressed us most was how immersed we felt in the environment.
                The river, the forest, the sounds of wildlife at night —
                everything felt completely natural. It was an experience that
                encouraged us to slow down and really appreciate where we were.
              </p>
              <p>
                <strong>— Elena & Marco, Italy</strong>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="custom-border p-4">
              <div className="d-flex justify-content-center mb-4">
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
                <FontAwesomeIcon icon={faStar} size="xl" className="gold" />
              </div>
              <p>
                <strong>“A journey we’ll be talking about for years.”</strong>
                The Yavarí is unlike any other destination we have visited. The
                landscape was breathtaking, the wildlife was incredible, and the
                feeling of being somewhere so remote made the whole trip
                extraordinary. If you want to experience a different side of the
                Amazon, this is it.
              </p>
              <p>
                <strong>— David T., Australia</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
