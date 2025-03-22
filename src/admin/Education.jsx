import React from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";
import Skills from "./Skills";

const Education = () => {
  return (
    <section className="h-screen bg-purple-100 overflow-hidden">
      <div className="flex items-center justify-between ">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-3/4" alt="" />
        </div>

        <div className="slideRight">
          <div className="mr-24">
            <div>
              <h1 className="font-semibold text-2xl">Add Your Education</h1>
            </div>

            <form action="" className="py-4">
              <div className="field1">
                <div>
                  <label htmlFor="schoolName" className="font-medium">
                    Name of Institution
                  </label>
                </div>
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  style={{ padding: "1rem", width: "100%" }}
                  placeholder="Enter Institution name"
                />
              </div>
              <div className="field1">
                <div>
                  <label htmlFor="year" className="font-medium">
                    Year of Graduation
                  </label>
                </div>
                <label htmlFor="from" className="mx-2">
                  From
                </label>
                <input
                  type="date"
                  name="from"
                  id="from"
                  style={{ padding: "1rem" }}
                />
                <label htmlFor="to" className="mx-2">
                  To
                </label>
                <input
                  type="date"
                  name="to"
                  id="to"
                  style={{ padding: "1rem", margin: "8px" }}
                />
              </div>
              <div className="field1">
                <div>
                  <label htmlFor="course" className="font-medium">
                    Course of Study
                  </label>
                </div>
                <input
                  type="text"
                  name="course"
                  id="course"
                  style={{ padding: "1rem", width: "100%" }}
                  placeholder="Enter course of study"
                />
              </div>
              <div className="field1">
                <div>
                  <label htmlFor="course" className="font-medium">
                    Award
                  </label>
                </div>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  style={{ padding: "1rem", width: "100%" }}
                  placeholder="E.g bachelors"
                />
              </div>
              <div>
                <button className="rounded-lg bg-purple-700 text-white m-3 p-3 w-1/4">
                  Submit
                </button>
              </div>
            </form>
            <button className="text-purple-700">
              <span>
                <i class="bx bx-plus"></i>
              </span>
              Add new education
            </button>
          </div>
          <div className="font-medium text-xl mt-6 mb-2 mx-20 flex justify-end hover:underline cursor-pointer ">
            <Link to="/experience">
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

export default Education;
