import React from "react";
import projectimg from "../assets/images/sample exp pic.png";
import python from "../assets/icons/python.png";
import flask from "../assets/icons/flask.png";
import dart from "../assets/icons/dart.png";

const Projects = () => {
  return (
    <main className="project mt-16 p-4 bg-gradient-to-br rounded-md js-scroll hideScroll">
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Projects</h1>
        <p>Here are some of my projects </p>
      </div>
      {}
      <section className="bg-purple-300">
        <section className="image">
          <img src={projectimg} alt="project-image" />
        </section>
        <section className="text-part">
          <div className="title m-12 text-center">
            <h1 className="text-3xl font-medium">
              Project 1: Masters in Artificial Intelligence
            </h1>
            <span className="icons flex justify-center p-2">
              <img className="w-6 m-3" src={python} alt="python" />
              <img className="w-6 m-3" src={flask} alt="flask" />
              <img className="w-6 m-3" src={dart} alt="dart" />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              a, ab culpa sunt deleniti quod nisi velit! Libero in quae sunt
              excepturi asperiores ipsum earum, doloremque porro nobis impedit
              laborum? ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem a, ab culpa sunt deleniti quod nisi velit! Libero in quae
              sunt excepturi asperiores ipsum earum, doloremque porro nobis
              impedit laborum? ipsum dolor sit amet consectetur adipisicing
              elit. Dolorem a, ab culpa sunt deleniti quod nisi velit! Libero in
              quae sunt excepturi asperiores ipsum earum, doloremque porro nobis
              impedit laborum?
            </p>
          </div>
        </section>
        <section className="text-white text-center">
          &bull; &bull; &bull;
        </section>
      </section>
    </main>
  );
};

export default Projects;
