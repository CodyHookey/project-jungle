import React from "react";

import Logo from "../assets/EcoAmazon_logo_002.png";

function About() {
  return (
    <section className="p-5">
      <div className="container py-5 text-center custom-border px-5">
        <img src={Logo} alt="" width={"100px"} className="mb-3" />
        <h3 className="mb-4">
          Discover the Heart of the Amazon with EcoAmazon Tours
        </h3>
        <p>
          Welcome to EcoAmazon Tours, your gateway to an unforgettable journey
          into one of the world’s most biodiverse ecosystems. Located along the
          remote Yavarí River on the Peru–Brazil border, our tours offer an
          authentic Amazonian adventure away from the usual tourist routes of
          Iquitos. Discover a rainforest rich in wildlife, culture, and natural
          beauty while reconnecting with nature.
        </p>
        <p>
          Our experiences combine adventure, sustainability, and cultural
          connection. Guided by people with deep knowledge of the Amazon and its
          traditions, you’ll explore winding waterways by traditional canoe,
          hike through primary rainforest, observe wildlife, learn about local
          traditions, and experience spectacular sunsets over the Yavarí River.
          Wake up to the calls of howler monkeys and tropical birds and discover
          the rainforest from a truly local perspective.
        </p>
        <p>
          This is more than a trip—it’s an opportunity to experience the Amazon
          from within, learn from the people who know it best, and create
          meaningful memories while respecting and protecting this incredible
          environment. EcoAmazon Tours — Explore the Amazon. Experience its
          magic. Protect its future.
        </p>
      </div>
    </section>
  );
}

export default About;
