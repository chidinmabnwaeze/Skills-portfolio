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
import matplot from "../assets/icons/matplot.png";
import pandas from "../assets/icons/pandas.png";
import seaborn from "../assets/icons/seaborn.png";
import tkinter from "../assets/icons/tkinter.png";
import sklearn from "../assets/icons/Sklearn.png";

const Skills = () => {
  const skills = [
    {
      img: aws,
      percent: "60%",
      title: "Amazon Web services",
    },
    {
      img: pandas,
      percent: "70%",
      title: "Pandas",
    },
    {
      img: seaborn,
      percent: "70%",
      title: "Seaborn",
    },
    {
      img: tkinter,
      percent: "70%",
      title: "Tkinter",
    },
    {
      img: sklearn,
      percent: "70%",
      title: "Sklearn",
    },
    {
      img: dart,
      percent: "70%",
      title: "Dart",
    },
    {
      img: matplot,
      percent: "70%",
      title: "Matplot",
    },
    {
      img: python,
      percent: "90%",
      title: "Python",
    },
    {
      img: c,
      percent: "60%",
      title: "C",
    },
    {
      img: node,
      percent: "70%",
      title: "Node js",
    },
    {
      img: flask,
      percent: "60%",
      title: "Flask",
    },
    {
      img: git,
      percent: "90%",
      title: "Git",
    },
    {
      img: mongo,
      percent: "80%",
      title: "MongoDB",
    },
    {
      img: mysql,
      percent: "80%",
      title: "MySQL",
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
      <main className="skill w-2/4 grid grid-cols-5 gap-10 m-auto">
        {skills.map((skill, index) => (
          <section className="">
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
            <p className="percent hidden text-sm text-center text-gray-700">
              {skill.title}
            </p>
          </section>
        ))}
      </main>
    </section>
  );
};

export default Skills;
