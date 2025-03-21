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
    <section className="h-screen bg-purple-100 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-3/4" alt="" />
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
              className="border"
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
          <div className="font-medium text-xl mt-16 mx-10 flex justify-end hover:underline cursor-pointer ">
            <Link to="/education">
              Next
              <span>
                <i class="bx bx-right-arrow-alt"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
