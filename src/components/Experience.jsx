import React, { useState } from "react";

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
  const line = [
    {
      circle: ".",
      line: ".",
    },
    {
      circle: ".",
      line: ".",
    },
  ];

  const [activeTab, setActiveTab] = useState("professional");
  const handleTab = () => {
    if (activeTab === "professional") {
      setActiveTab(activeTab);
    } else if (activeTab === "academic") {
      setActiveTab(activeTab);
    }
  };
  return (
    <main id="experience" className="mt-32 mx-16 js-scroll hideScroll">
      <div className="title m-12 text-center">
        <h1 className="text-3xl font-medium">Experience</h1>
        <p>My experience both academically & professionally -- </p>
      </div>
      <section className="exp">
        <div className="subheads flex justify-center items-center">
          <button
            className={` mr-8 flex items-center academic ${
              activeTab === "academic"
                ? "bg-purple-700 text-white p-2 rounded flex "
                : ""
            }`}
            onClick={handleTab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <i class="bx bxs-graduation"></i>
            <p className="m-1">Academic</p>
          </button>
          <button
            className={`professional flex items-center p-2 ${
              activeTab === "professional"
                ? "bg-purple-700 text-white rounded "
                : ""
            }`}
          >
            <i class="bx bxs-briefcase"></i>
            <p className="m-1">Professional</p>
          </button>
        </div>
        <div className="exp-body">
          {/* trying to make this line duplicate everytime a new experience is added */}
          {line.forEach((experience) => {
            if (exp.length) {
              line.push(experience);
            }
            <div className="flex flex-col justify-center items-center">
              <div className="rounded-full bg-purple-700 w-6">
                {experience.circle}
              </div>
              <div className="line h-20 w-1 bg-purple-700">
                {experience.line}
              </div>
            </div>;
          })}
          {exp.map((xp, index) => (
            <div className="m-2" key={index}>
              <div>
                <h1 className="font-semibold ">{xp.role}</h1>
                <p>{xp.org}</p>
              </div>
              <span className="text-gray-500 text-sm">
                <i class="bx bx-calendar"></i>
                {xp.date}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Experience;
