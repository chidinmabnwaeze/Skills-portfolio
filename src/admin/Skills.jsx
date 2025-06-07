import React, { useState } from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";

const Skills = () => {
  const [addSkill, setAddSkill] = useState([]);
  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    setAddSkill([...addSkill, skill.trim()]);
    setSkill("");
    localStorage.setItem("skills", addSkill);
  };
  console.log(addSkill);
  return (
    <section className="h-screen relative bg-purple-100 ">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-[600px] object-cover" alt="" />
        </div>

        <div className="slideRight w-1/3">
          <div className="my-auto mr-24">
            <div>
              <h1 className="font-semibold text-2xl mb-6">Add your skills</h1>
              {addSkill.map((add, index) => (
                <button
                  className="border focus-visible:border-purple-700  border-purple-700 w-2/4 rounded-xl p-3 bg-white"
                  key={index}
                >
                  {add}
                  <button>
                    <i class="bx  bx-trash-x text-purple-900"></i>
                  </button>
                </button>
              ))}
            </div>
            <input
              name="skill"
              id=""
              className="p-3 w-full my-5"
              placeholder="e.g Javascript"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            ></input>
            <div>
              <button
                className="rounded-lg bg-purple-700 text-white m-3 p-3 w-2/4"
                onClick={handleAddSkill}
              >
                Add Skill
              </button>
              <i class="bx  bx-trash-x"></i>
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-between absolute bottom-20 left-0 right-0">
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/profile">
            <span>
              <i class="bx bx-left-arrow-alt"></i>
            </span>
            Back
          </Link>
        </div>
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/education">
            Next
            <span>
              <i class="bx bx-right-arrow-alt"></i>
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Skills;
