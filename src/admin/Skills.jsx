import React, { useState } from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";

const Skills = () => {
  const [addSkill, setAddSkill] = useState([]);
  const handleAddSkill = () => {
    setAddSkill([...addSkill, { skill: "" }]);
  };
  const handleServiceChange = () => {
    e.target.value();
  };

  return (
    <section className="h-screen relative bg-purple-100 ">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-[600px] object-cover" alt="" />
        </div>

        <div className="slideRight w-1/3">
          <div className="my-auto mr-24">
            <div>
              <h1 className="font-semibold text-2xl">Add your skills</h1>
              {addSkill.map((add, index) => (
                <button key={index}>{add.skill && add.skill}</button>
              ))}
            </div>
            <input
              name="profile"
              id=""
              className="p-3"
              // value={add.skill}
              onChange={(e) => handleServiceChange(e)}
            ></input>
            <div>
              <button
                className="rounded-lg bg-purple-700 text-white m-3 p-3 w-1/4"
                onClick={handleAddSkill}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-between absolute bottom-20 left-0 right-0">
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/upload">
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
