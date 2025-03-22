import React from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";

const Projects = () => {
  return (
    <section className="h-screen bg-purple-100 ">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="w-[590px] object-cover" alt="" />
        </div>

        <div className="slideRight">
          <div className=" mr-24">
            <div>
              <h1 className="font-semibold text-2xl">Add your projects</h1>
              {/* <p>Tell us your experience</p> */}
            </div>
            <form action="" className="py-4">
              <div className="field1">
                <div>
                  <label htmlFor="position" className="font-medium">
                    Project Name
                  </label>
                </div>
                <input
                  type="text"
                  name="position"
                  id="position"
                  style={{ padding: "1rem", width: "100%" }}
                  placeholder="Enter project name"
                />
              </div>
              <div className="field1">
                <div>
                  <label htmlFor="org" className="font-medium">
                    Project Description
                  </label>
                </div>
                <textarea
                  type="text"
                  name="org"
                  id="org"
                  style={{ padding: "1rem", width: "100%" }}
                  placeholder="Enter project description"
                />
              </div>
              <div className="field1">
                <div>
                  <label htmlFor="year" className="font-medium">
                    Select the skills used
                  </label>
                </div>
                <label htmlFor="from" className="mx-2">
                  Css
                </label>
                <input
                  type="checkbox"
                  name="from"
                  id="from"
                  style={{ padding: "1rem" }}
                />
                <label htmlFor="to" className="mx-2">
                  Python
                </label>
                <input
                  type="checkbox"
                  name="to"
                  id="to"
                  style={{ padding: "1rem", margin: "8px" }}
                />
              </div>

              <div className="field1">
                <div>
                  <label htmlFor="image" className="font-medium">
                    Upload Image
                  </label>
                </div>
                <input
                  type="file"
                  name="image"
                  id="image"
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
              Add new project
            </button>
          </div>
        </div>
      </div>
      <section className="flex justify-between">
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/education">
            <span>
              <i class="bx bx-left-arrow-alt"></i>
            </span>
            Back
          </Link>
        </div>
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="">
            Finish
            <span>
              <i class="bx bx-right-arrow-alt"></i>
            </span>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Projects;
