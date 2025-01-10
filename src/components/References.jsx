import React, { useEffect, useState } from "react";
import startquote from "../assets/icons/raphael_quote.svg";
import endquote from "../assets/icons/entypo_quote.svg";
import client from "../assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import client2 from "../assets/images/evan.jpg";

export default function References() {
  const reference = [
    {
      img: client,
      name: "Stella Jones",
      role: "M&E Manager",
      message: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque
          voluptates saepe maiores sit, labore autem tempore ab! Saepe deleniti
          eveniet consectetur earum dolores officia iste reprehenderit maxime
          autem cupiditate!
        </>
      ),
    },
    {
      img: client2,
      name: "Sarah Amos",
      role: "M&E Manager",
      message: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque
          voluptates saepe maiores sit, labore autem tempore ab! Saepe deleniti
          eveniet consectetur earum dolores officia iste reprehenderit maxime
          autem cupiditate!
        </>
      ),
    },
    {
      img: client,
      name: "Stella Jones",
      role: "M&E Manager",
      message: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque
          voluptates saepe maiores sit, labore autem tempore ab! Saepe deleniti
          eveniet consectetur earum dolores officia iste reprehenderit maxime
          autem cupiditate!
        </>
      ),
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % reference.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reference.length]);
  return (
    <section
      id="references"
      class="testimonal-section mt-32 js-scroll hideScroll"
    >
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">References</h1>
        <p>Here's what my employers and people I've worked with have to say</p>
      </div>

      <section className="testimonal-card w-3/4 m-auto shadow-2xl flex relative justify-center items-center overflow-hidden">
        {reference.map((ref, index) => (
          <div
            class={`testimony flex flex-col justify-center items-center p-12 ${
              slideIndex === index
                ? "slideVisible"
                : slideIndex ===
                  (index - 1 + reference.length) % reference.length
                ? "slideExit"
                : "slideHidden"
            } 
            `}
            key={index}
          >
            <div class="client-info">
              <img
                class="client-pic w-16 h-16 m-auto object-cover rounded-full "
                src={ref.img}
                alt="client-picture"
              />
              <span className="m-2 text-center">
                <h3 class="text-purple-700">{ref.name}</h3>
                <p>{ref.role}</p>
              </span>
            </div>
            <div class="review">
              <span>
                <img className="quote" src={startquote} alt="quotes" />
                {ref.message}
                <img src={endquote} alt="quotes" />
              </span>
            </div>
          </div>
        ))}
        <section className="indicators absolute bottom-3">
          {reference.map((_, index) => (
            <button
              className={
                slideIndex === index
                  ? "indicator w-2 h-2 shadow-md m-2"
                  : "indicator-inactive"
              }
              key={index}
              onClick={() => setSlideIndex(index)}
            >
              &#11044;
            </button>
          ))}
          {/* &bull; &bull; &bull; */}
        </section>
      </section>
    </section>
  );
}
