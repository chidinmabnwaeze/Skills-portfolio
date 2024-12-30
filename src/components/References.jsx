import React from "react";
import startquote from "../assets/icons/raphael_quote.svg";
import endquote from "../assets/icons/entypo_quote.svg";
import client from "../assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg";

export default function References() {
  return (
    <section class="testimonal-section mt-32 ">
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">References</h1>
        <p>Here's what my employers and people I've worked with have to say</p>
      </div>
      <section class="testimonal-cards w-3/4 p-10 m-auto shadow-2xl">
        <div class="testimony flex flex-col justify-center items-center">
          <div class="client-info">
            <img
              class="client-pic w-16 h-16 m-auto object-cover rounded-full "
              src={client}
              alt="client-picture"
            />
            <span className="m-2 text-center">
              <h3 class="text-purple-700">Sarah Jones</h3>
              <p>M&E Manager</p>
            </span>
          </div>
          <div class="review">
            <span>
              <img src={startquote} alt="quotes" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque
              voluptates saepe maiores sit, labore autem tempore ab! Saepe
              deleniti eveniet consectetur earum dolores officia iste
              reprehenderit maxime autem cupiditate! &nbsp;
              <img src={endquote} alt="quotes" />
            </span>
          </div>
        </div>
      </section>
      <section className="text-center">&bull; &bull; &bull;</section>
    </section>
  );
}