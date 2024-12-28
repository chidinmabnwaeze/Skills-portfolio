import React from "react";

const Experience = () => {
  const exp = [
    {
      role: "Lead Backend engineer",
      org: "Future feet",
      date: "Jul-2024 - September 2024",
    },
    {
      role: "Lead Backend engineer",
      org: "Future feet",
      date: "Jul-2024 - September 2024",
    },
    {
      role: "Lead Backend engineer",
      org: "Future feet",
      date: "Jul-2024 - September 2024",
    },
  ];
  return (
    <main>
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Experience</h1>
        <p>My experience both academically & professionally -- </p>
      </div>
      <section className="exp">
        <div className="subheads flex justify-center items-center">
          <span className=" mr-8 p-4">
            <i class="bx bxs-graduation"></i>Academic
          </span>
          <span>
            <i class="bx bxs-briefcase"></i>Professional
          </span>
        </div>
        <div className="exp-body">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-full bg-purple-700 w-6">.</div>
            <div className="line h-20 w-1 bg-purple-700">.</div>
          </div>
          {exp.map((xp, index) => (
            <>
              <div key={index}>
                <h1>{xp.role}</h1>
                <p>{xp.org}</p>
              </div>
              <span>{xp.date}</span>
            </>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Experience;
