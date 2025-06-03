import React, { useState } from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";

const Profile = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    e.preventDefault(e);
    getItems();
  };
  const getItems = () => {
    document.querySelector(".textArea").innerHTML = inputValue;
    localStorage.setItem("userprofile", inputValue);
    localStorage.getItem("userprofile");
  };
  console.log(inputValue);
  return (
    <section className="h-screen bg-purple-100 ">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-[600px]" alt="" />
        </div>

        <div className="slideRight">
          <div className="my-auto mr-24">
            <div>
              <h1 className="font-semibold text-2xl">Add a profile</h1>
              <p>Write a brief summary about yourself</p>
            </div>
            <textarea
              name="profile"
              id=""
              height="4rem"
              className="textArea w-[400px] h-[200px] border p-4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></textarea>
            <div>
              <button
                className="rounded-lg bg-purple-700 text-white m-3 p-3 w-1/4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-between absolute bottom-20 left-0 right-0">
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/login">
            <span>
              <i class="bx bx-left-arrow-alt"></i>
            </span>
            Back
          </Link>
        </div>
        <div className="font-medium text-xl mx-20 flex justify-end hover:underline cursor-pointer ">
          <Link to="/skills">
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

export default Profile;
