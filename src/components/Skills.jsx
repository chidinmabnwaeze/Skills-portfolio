import React from "react";
import * as icons from "../assets/icons/index.js"

const Skills = () => {
  const skills = [
    {
      img: icons.python,
      percent: "90%",
      title: "Python",
    },

    {
      img: icons.pandas,
      percent: "70%",
      title: "Pandas",
    },
    {
      img: icons.seaborn,
      percent: "70%",
      title: "Seaborn",
    },
    {
      img: icons.sklearn,
      percent: "70%",
      title: "Sklearn",
    },
    {
      img: icons.airflow,
      percent: "60%",
      title: "Airflow",
    },
    {
      img: icons.matplot,
      percent: "70%",
      title: "Matplotlib",
    },
    {
      img: icons.azure,
      percent: "60%",
      title: "Azure",
    },
    {
      img: icons.github,
      percent: "80%",
      title: "GitHub",
    },
    {
      img: icons.mysql,
      percent: "80%",
      title: "MySQL",
    },
    {
      img: icons.docker,
      percent: "70%",
      title: "Docker",
    },
    {
      img: icons.javascript,
      percent: "70%",
      title: "JavaScript",
    },
    {
      img: icons.mongodb,
      percent: "80%",
      title: "MongoDB",
    },
    {
      img: icons.sql,
      percent: "80%",
      title: "SQL",
    },
    {
      img: icons.tkinter,
      percent: "70%",
      title: "Tkinter",
    },
    {
      img: icons.chatgpt,
      percent: "50%",
      title: "ChatGPT",
    },
    {
      img: icons.databricks,
      percent: "60%",
      title: "Databricks",
    },
    {
      img: icons.django,
      percent: "70%",
      title: "Django",
    },
    {
      img: icons.kafka,
      percent: "85%",
      title: "Kafka",
    },
    {
      img: icons.numpy,
      percent: "80%",
      title: "NumPy",
    },
    {
      img: icons.postgres,
      percent: "90%",
      title: "PostgreSQL",
    },
    {
      img: icons.powerbi,
      percent: "95%",
      title: "PowerBI",
    },
    {
      img: icons.spark,
      percent: "70%",
      title: "Apache Spark",
    },
    {
      img: icons.aws,
      percent: "60%",
      title: "Amazon Web Services",
    },
  ];

  return (
    // <section id="skills" className="skills mt-32 js-scroll hideScroll">
    //   <div className="title m-12 text-center">
    //     <h1 className="text-3xl font-medium">Skills</h1>
    //     <p>
    //       My skills and proficiency --{" "}
    //       <span className="text-purple-700">Hover to see proficiency</span>
    //     </p>
    //   </div>
    //   <main className="skill w-2/4 grid grid-cols-5 gap-10 m-auto">
    //     {skills.map((skill, index) => (
    //       <section className="">
    //         <div
    //           className="stack relative rounded-full w-24 border-2 border-gray-300 p-1"
    //           key={index}>
    //           <img
    //             className="stack-img relative object-cover overflow-hidden rounded-full w-full"
    //             src={skill.img}
    //             alt="tech stack icon"
    //           />
    //           {/* <span className=" percent hidden z-10 absolute top-8 bottom-10 left-8 right-10 text-2xl font-bold">
    //             {skill.percent}
    //           </span> */}
    //         </div>
    //         <p className="percent hidden text-sm text-center text-gray-700">
    //           {skill.title}
    //         </p>
    //       </section>
    //     ))}
    //   </main>
    // </section>

    <section id="skills" className="skills mt-32 js-scroll hideScroll">
  <div className="title m-12 text-center">
    <h1 className="text-3xl font-medium">Skills</h1>
    <p>
      My skills and proficiency
    </p>
  </div>
  <main className="skill w-2/4 grid grid-cols-6 gap-10 m-auto">
    {skills.map((skill, index) => (
      <section key={index} className="flex flex-col items-center justify-center">
        <div className="stack relative rounded-full w-24 h-24 border-2 border-gray-300 p-1 overflow-hidden">
          <img
            className="stack-img object-contain w-full h-full"
            src={skill.img}
            alt={skill.title}
          />
        </div>
        {/* Always show proficiency text without hover */}
        <p className="percent text-sm text-center text-gray-700 mt-2">
          {skill.title}
        </p>
      </section>

      
    ))}
  </main>
</section>


  );
};

export default Skills;
