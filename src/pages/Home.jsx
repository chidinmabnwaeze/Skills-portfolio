import React from "react";
import Header from "../components/Header";
import man from "../assets/images/dark_man-removebg-preview.png";
import profile from "../assets/images/evan.jpg";
import profilePic from "../assets/images/image.png";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import References from "../components/References";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="">
      <Header />

      <section className="body content-center m-12">
        <section className="intro h-lvh flex items-center justify-center ">
          <div className="introText">
            <h1 className="text-4xl font-semibold">
              Hello There, I'm Everistus
            </h1>
            <p className="text-xl flex mt-2 ">
              and I am a Data & Software Engineer{" "}
              <img className="emoji h-8" src={man} alt="" />
            </p>
            <div className="summary mt-6">
              <p>
                Data Science <span>&#124;</span>
                Software Engineering <span>&#124;</span> <br />
                Backend Engineering <span>&#124;</span>
                Artificial Intelligence <span>&#124;</span>
              </p>
            </div>
            <button className="CTA bg-purple-700 p-2.5 text-white rounded-md mt-5">
              Contact Me <span>&rarr;</span>
            </button>
          </div>
          <img
            className="rounded-full w-1/4 ml-12 object-center"
            src={profilePic}
            alt="profile-pic"
          />
        </section>

        {/* about section */}
        <section className="about flex flex-col items-center justify-center">
          <div className="title m-12">
            <h1 className="text-3xl font-medium">About Me</h1>
            <p>Get to know me!</p>
          </div>
          <div className="aboutInfo flex justify-center">
            <img
              className="rounded-2xl w-2/4 border-2 border-purple-700"
              src={profile}
              alt="my picture"
            />

            <div className="info ml-6">
              <p>
                I am Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veniam et quia sed accusamus commodi eum, assumenda debitis
                eaque officia unde facere, quibusdam fugiat ea. Illum voluptas
                nihil fuga ab quia? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam et quia sed accusamus commodi eum,
                assumenda debitis eaque officia unde facere, quibusdam fugiat
                ea. Illum voluptas nihil fuga ab quia? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Veniam et quia sed accusamus
                commodi eum, assumenda debitis eaque officia unde facere,
                quibusdam fugiat ea. Illum voluptas nihil fuga ab quia? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Veniam et
                quia sed accusamus commodi eum, assumenda debitis eaque officia
                unde facere, quibusdam fugiat ea. Illum voluptas nihil fuga ab
                quia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veniam et quia sed accusamus commodi eum, assumenda debitis
                eaque officia unde facere, quibusdam fugiat ea. Illum voluptas
                nihil fuga ab quia?
              </p>
              <div className="figures flex justify-center items-center mt-20">
                <div className="mr-10 text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">4+</h1>
                  <p className="text-gray-500">Years Experience</p>
                </div>
                <div className="mr-10 text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">
                    20+
                  </h1>
                  <p className="text-gray-500">Projects</p>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-purple-700">4+</h1>
                  <p className="text-gray-500">Companies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* skills section */}

        <Skills />

        {/* experience */}
        <Experience />
        <Projects />
        <Services />
        <References />
        <Contact />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
