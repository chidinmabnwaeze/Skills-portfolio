import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import man from "../assets/images/dark_man-removebg-preview.png";
import profile from "../assets/images/image.png";
import profilePic from "../assets/images/image.png";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import References from "../components/References";
import Footer from "../components/Footer";
import Typing from "../components/Typing";
import facebook from "../assets/logo/facebook-logo-facebook-icon-transparent-free-png.webp";
import insta from "../assets/logo/instagram-filled.png";
import linkedin from "../assets/logo/social_linkedin.png";
import twitter from "../assets/logo/twiitter x.jpeg";
import wavinghand from "../assets/images/waving-hand.png";
// import { observer } from "../components/scroll";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".js-scroll",
      ".scroll-container"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            setActiveSection(entry.target.id);
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleMenuClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="">
      <Header handleMenuClick={handleMenuClick} activeSection={activeSection} />

      {/* hideScroll class indicates styles for each element before they intersect and are revealed when scrolling */}

      <section className="body mx-16 my-12">
        <section
          id="home"
          className="home h-lvh flex items-center justify-center js-scroll hideScroll"
        >
          <div className="introText relative">
            <span className="flex items-center">
              <h1 className="auto-text text-4xl border-r-4 border-r-purple-700 mr-2 font-semibold">
                <Typing
                  text="Hello There, I'm Everistus"
                  speed={50}
                  pauseTime={1000}
                />
              </h1>
              <img src={wavinghand} alt="wave image" />
            </span>
            <p className="text-xl flex mt-2 ">
              and I am a Data & Software Engineer
              <img className="emoji h-8" src={man} alt="" />
            </p>
            <div className="summary mt-6">
              <p>
                Data Science <span>&#124;</span>
                &nbsp; Software Engineering <span>&#124;</span> <br />
                Backend Engineering <span>&#124;</span>
                &nbsp; Artificial Intelligence <span>&#124;</span>
              </p>
            </div>
            <div className="social-links flex items-center">
              <a className="sm-link" href="#">
                {/* <i class="bx bxl-facebook text-2xl"></i> */}
                <img className="w-10 m-1.5" src={facebook} alt="facebook" />
              </a>
              <a className="sm-link" href="#">
                <img className="w-8 m-1.5" src={insta} alt="insta" />
              </a>
              <a className="sm-link" href="#">
                <img
                  className="w-8 mx-1.5 mt-1 "
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
              <a className="sm-link" href="#">
                <img className="w-8 m-1.5" src={twitter} alt="twitter" />
              </a>
            </div>
            <button className="CTA bg-purple-700 p-2.5 text-white rounded-md mt-5">
              Contact Me <span>&rarr;</span>
            </button>
          </div>
          <img
            className="profilePic rounded-full w-1/4 ml-12 object-center"
            src={profilePic}
            alt="profile-pic"
          />
        </section>

        {/* about section */}
        <section
          id="about"
          className="about mx-32 flex flex-col items-center justify-center js-scroll hideScroll"
        >
          <div className="title m-12">
            <h1 className="text-3xl font-medium">About Me</h1>
            <p>Get to know me!</p>
          </div>
          <div className="aboutInfo flex justify-center">
            <img
              className="rounded-2xl w-2/4 object-cover border-2 border-purple-700"
              src={profile}
              alt="my picture"
            />

            <div className="info ml-10">
              <article className="text-lg">
                A detail-oriented and experienced engineer with over 2 years of
                experience in software design, development, and analysis,
                complemented by my AI engineering skills. I have a proven track
                record of managing analytic servers, optimizing database
                systems, and providing technical support. Currently pursuing an
                MSc in Artificial Intelligence, I seek an opportunity in a
                tech-forward organization to apply my technical expertise to
                drive innovation and enhance data-driven decision-making. I am
                committed to delivering impactful solutions through a
                combination of practical and academic experience.
              </article>
              <section className="figures flex justify-center items-center mt-16">
                <div className="mr-10 text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">2+</h1>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="mr-10 text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">
                    10+
                  </h1>
                  <p className="text-gray-500">Projects</p>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">2+</h1>
                  <p className="text-gray-500">Companies</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        {/* <Services /> */}
        {/* <References /> */}
        <Contact />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
