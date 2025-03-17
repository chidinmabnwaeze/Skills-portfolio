import React, { useState } from "react";

const Experience = () => {
  const exp = [
    {
      role: "Software Engineer",
      org: "Nextwear Technologies",
      date: "July 2022 - July 2024",
    },
    {
      role: "AI and Data Engineer",
      org: "Gallery of Code",
      date: "March 2023 - June 2024",
    },
    // {
    //   role: "Lead Backend engineer",
    //   org: "Future feet",
    //   date: "Jul-2024 - September 2024",
    // },
  ];


  const education = [
    {
      course: "Msc Artificial Intelligence",
      school: "Nottingham Trent University",
      location: "United Kingdom",
      date: "September 2024 - Present",
    },
    {
      course: "BEng (Hons), Computer Engineering",
      school: "Michael Okpara University of Agriculture",
      location: "Nigeria",
      date: "September 2015 - October 2020",
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
        {/* <div className="subheads flex justify-center items-center">
          <button
            id="academic"
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
        </div> */}
        {/* trying to make this line duplicate everytime a new experience is added */}
        {/* {line.forEach((experience) => {
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
              })} */}

        <div className="exp-body flex justify-center">
          <section className="edu-section m-5 mr-14">
            <div>
              <h1 className="font-semibold text-xl text-purple-700">
                Education
              </h1>
            </div>
            {education.map((edu, index) => (
              <div className="eduContent my-2" key={index}>
                <div className="py-3">
                  <h1 className="course font-medium">{edu.course}</h1>
                  <p>{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <i class="bx bx-calendar"></i>
                  {edu.date}
                </span>
              </div>
            ))}
          </section>

          <section className="experience-section m-5 ">
            <div>
              <p className="title font-semibold text-xl text-purple-700">
                {" "}
                Work Experience
              </p>
            </div>
            {exp.map((xp, index) => (
              <div className="my-2" key={index}>
                <div className="py-3">
                  <h1 className="font-medium ">{xp.role}</h1>
                  <p>{xp.org}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  <i class="bx bx-calendar"></i>
                  {xp.date}
                </span>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default Experience;
