import React from "react";
import { serviceCards } from "../data/service-card";

const Services = () => {
  return (
    <section className="services flex flex-col justify-center items-center ">
      <div className="services-head mt-6">
        <h1 className="text-3xl font-semibold text-blue-700 mt-6">
          Our Services
        </h1>
        <p className="">Here's what we offer</p>
      </div>
      <div className="service-cards js-services-card grid grid-cols-3 gap-5 m-8 content-center">
        {serviceCards.map((cards, index) => (
          <a
            className="service-card w-4/5 p-6 items-center flex flex-col "
            href=""
          >
            <img src={cards.img} alt="" />
            <div className="card-text">
              <h3 className="font-medium text-xl pb-3 ">{cards.title}</h3>
              <p>{cards.text}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
