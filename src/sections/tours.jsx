import React from "react";

class Tours extends React.Component {
  state = {
    destinations: [
      {
        name: "Yavarí Beyond",
        desc: "7 Days / 6 Nights",
        price: "999",
        image: "/beyond.webp",
      },
      {
        name: "Ultimate Yavarí Explorer",
        desc: "6 Days / 5 Nights",
        price: "899",
        image: "/ultimate.webp",
      },
      {
        name: "Yavarí Wild Camp",
        desc: "5 Days / 4 Nights",
        price: "799",
        image: "/camping.webp",
      },
      {
        name: "Yavarí Amazon Adventure",
        desc: "4 Days / 3 Nights",
        price: "699",
        image: "/unbound.webp",
      },
      {
        name: "Yavarí Wildlife Escape",
        desc: "3 Days / 2 Nights",
        price: "599",
        image: "/wildlife.webp",
      },
      {
        name: "Yavarí Weekend",
        desc: "2 Days / 1 Night",
        price: "499",
        image: "/weekend.webp",
      },
    ],
  };

  render() {
    const { destinations } = this.state;

    const looped = [...destinations, ...destinations];

    return (
      <section id="tours" className="dark-custom-bg py-5">
        <div className="container-fluid px-0 text-center">
          <h3>Our Tours</h3>
          <p className="text-white mb-5">
            Explore our most popular tours among rainforest adventurers!
          </p>

          <div className="custom-carousel d-flex mb-5">
            <div className="track">
              {looped.map((d, i) => {
                return (
                  <div
                    className="custom-card-scroll p-4 d-flex flex-column me-3 outer"
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${d.image}) center/cover no-repeat`,
                      height: "545px",
                    }}
                    key={i}
                  >
                    <p className="fs-3 text-white mt-5 fw-bold">{d.name}</p>
                    <p className="text-white fs-4">{d.desc}</p>
                    <p className="text-white mt-auto fs-3">${d.price}</p>
                    <button className="btn secondary-button inner">
                      Learn More
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="btn secondary-button outer px-4 fw-bold">
            See all Our Tours
          </button>
        </div>
      </section>
    );
  }
}

export default Tours;
