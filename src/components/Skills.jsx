import React from "react";
import aws from "../assets/icons/aws.png";
import dart from "../assets/icons/dart.png";
import c from "../assets/icons/c.png";
import node from "../assets/icons/node img.png";
import flask from "../assets/icons/flask.png";
import mongo from "../assets/icons/mongodb.png";
import git from "../assets/icons/git.png";
import python from "../assets/icons/python.png";
import mysql from "../assets/icons/sql.png";

const Skills = () => {
  const skills = [
    {
      img: aws,
      percent: "60%",
    },
    {
      img: dart,
      percent: "70%",
    },
    {
      img: c,
      percent: "60%",
    },
    {
      img: node,
      percent: "70%",
    },
    {
      img: flask,
      percent: "60%",
    },
    {
      img: python,
      percent: "90%",
    },
    {
      img: git,
      percent: "90%",
    },
    {
      img: mongo,
      percent: "80%",
    },
    {
      img: mysql,
      percent: "80%",
    },
  ];

  return (
    <section id="skills" className="skills mt-32 js-scroll hideScroll">
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Skills</h1>
        <p>
          My skills and proficiency --{" "}
          <span className="text-purple-700">Hover to see proficiency</span>
        </p>
      </div>
      <main className="skill w-1/4 grid grid-cols-3 gap-4 m-auto">
        {skills.map((skill, index) => (
          <div
            className="stack relative rounded-full w-24 border-2 border-gray-300 p-1"
            key={index}
          >
            <img
              className="stack-img relative object-cover overflow-hidden rounded-full w-full"
              src={skill.img}
              alt="tech stack icon"
            />
            <span className=" percent hidden z-10 absolute top-8 bottom-10 left-8 right-10 text-2xl font-bold">
              {skill.percent}
            </span>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Skills;
