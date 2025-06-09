import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";
import Skills from "./Skills";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [formData, setFormData] = useState({
    institution: "",
    from: "",
    to: "",
    course: "",
    degree: "",
  });
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("education")) || [];
    setEducation(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEducation((prev) => [...prev, formData]);
    setFormData({
      institution: "",
      from: "",
      to: "",
      course: "",
      degree: "",
    });
    localStorage.setItem("formdata", JSON.stringify(formData));
  };

  return (
    <section className="bg-purple-100">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-[600px]" alt="" />
        </div>

        <div className="slideRight">
          <div className="mr-24">
            <div>
              <h1 className="font-semibold text-2xl">Add Your Education</h1>
            </div>

            <form onSubmit={handleSubmit} className="py-4">
              <div className="field1">
                <div>
                  <label htmlFor="schoolName" className="font-medium">
                    Name of Institution
                  </label>
                </div>
                <input
                  type="text"
                  name="institution"
                  id="schoolName"
                  value={formData.institution}
                  onChange={handleChange}
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
                  value={formData.from}
                  onChange={handleChange}
                />
                <label htmlFor="to" className="mx-2">
                  To
                </label>
                <input
                  type="date"
                  name="to"
                  id="to"
                  style={{ padding: "1rem", margin: "8px" }}
                  value={formData.to}
                  onChange={handleChange}
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
                  value={formData.course}
                  onChange={handleChange}
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
                  value={formData.award}
                  onChange={handleChange}
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
        </div>
      </div>
      <section className="flex justify-between">
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/skills">
            <span>
              <i class="bx bx-left-arrow-alt"></i>
            </span>
            Back
          </Link>
        </div>
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/experience">
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

export default Education;
