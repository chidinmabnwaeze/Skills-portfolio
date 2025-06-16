import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";
import Skills from "./Skills";

const Education = () => {
  const [education, setEducation] = useState([
    {
      institution: "",
      from: "",
      to: "",
      course: "",
      degree: "",
    },
  ]);
  // const [formData, setFormData] = useState({
  //   institution: "",
  //   from: "",
  //   to: "",
  //   course: "",
  //   degree: "",
  // });
  // const [multipleForm, setMultipleForm] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("education")) || [];
    if (savedData.length > 0) {
      setEducation(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...education];
    updatedData[index][name] = value;
    setEducation(updatedData);
    // setFormData((prev) => ({ ...prev, education}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setEducation((prev) => [...prev, {
    //   institution: "",
    //   from: "",
    //   to: "",
    //   course: "",
    //   degree: "",
    // }]);
    //
    //  // setFormData({
    //   institution: "",
    //   from: "",
    //   to: "",
    //   course: "",
    //   degree: "",
    // });

    localStorage.setItem("education", JSON.stringify(education));
    alert("form Submitted");
  };

  // const addEducation = () => {
  //   const newForm = [...education, formData];
  //   setEducation(newForm);
  // };

  const addEdu = (e) => {
    e.preventDefault();
    setEducation((prev) => [
      ...prev,
      {
        institution: "",
        from: "",
        to: "",
        course: "",
        degree: "",
      },
    ]);
  };

  const deleteForm = (index) => {
    const forms = education.filter((_, deleted) => deleted !== index);
    setEducation(forms);
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
              {education.map((form, index) => (
                <div key={index} className="mb-6 border-b pb-4">
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
                      value={form.institution}
                      onChange={(e) => handleChange(index, e)}
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
                      value={form.from}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <label htmlFor="to" className="mx-2">
                      To
                    </label>
                    <input
                      type="date"
                      name="to"
                      id="to"
                      style={{ padding: "1rem", margin: "8px" }}
                      value={form.to}
                      onChange={(e) => handleChange(index, e)}
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
                      value={form.course}
                      onChange={(e) => handleChange(index, e)}
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
                      value={form.degree}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                  <button onClick={() => deleteForm(index)}>Delete</button>
                </div>
              ))}
              <div>
                <button
                  className="rounded-lg bg-purple-700 text-white m-3 p-3 w-1/4"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>

            <div>
              <button onClick={addEdu}>
                <i class="bx bx-plus"></i>
                Add Education
              </button>
            </div>

            {/* {education.length > 1 && (
              <div>
                {education.map((form, index) => (
                  <button
                    key={index}
                    className="text-purple-700"
                    onClick={addEducation}
                  >
                    <span>
                      <i class="bx bx-plus"></i>
                    </span>
                    Add new education
                  </button>
                ))}
              </div>
            )} */}
            {/* {education.length > 0 && (
              <div className="mt-4 space-y-2">
                <h2 className="font-semibold text-lg">Education List:</h2>
                <ul className="list-disc pl-5 text-gray-800">
                  {education.map((edu, index) => (
                    <li key={index}>
                      {edu.schoolName} - {edu.course} ({edu.from} to {edu.to})
                    </li>
                  ))}
                </ul>
              </div>
            )} */}
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
