import React from "react";
import { serviceCards } from "../data/service-card";

const Services = () => {
  return (
    <section
      id="services"
      className="services mt-28 mx-16 flex flex-col justify-center items-center js-scroll hideScroll "
    >
      <div className="services-head text-center mt-6">
        <h1 className="text-3xl font-medium mt-6">Services</h1>
        <p className="">Here's what I offer</p>
      </div>
      <div className="service-cards js-services-card flex ">
        {serviceCards.map((cards, index) => (
          <a className="service-card w-2/5 p-6 border m-4 " href="" key={index}>
            <img className="" src={cards.img} alt="" />
            <div className="card-text">
              <h3 className="font-medium  pb-3 ">{cards.title}</h3>
              <p>{cards.text}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
