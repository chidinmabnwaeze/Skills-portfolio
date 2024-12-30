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
      <section class="testimonal-cards w-3/4 h-full p-20 m-auto shadow-2xl">
        <div class="testimony flex flex-col justify-center items-center">
          <div class="client-info flex items-center">
            <img
              class="client-pic w-16 h-16 object-cover rounded-full "
              src={client}
              alt="client-picture"
            />
            <span className="m-2">
              <h3 class="text-blue-700">Sarah Jones</h3>
              <p>M&E Manager</p>
            </span>
            {/* <span class="ratings"><img src="" alt=""></span>*/}
          </div>
          <div class="review">
            <span>
              <img src={startquote} alt="quotes" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque
              voluptates saepe maiores sit, labore autem tempore ab! Saepe
              deleniti eveniet consectetur earum dolores officia iste
              reprehenderit maxime autem cupiditate!
              <img src={endquote} alt="quotes" />
            </span>
          </div>
        </div>
        <div class="scroll-indicator rounded-full">.</div>
      </section>
    </section>
  );
}
