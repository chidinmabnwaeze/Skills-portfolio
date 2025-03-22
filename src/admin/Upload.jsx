import React from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";
import Skills from "./Skills";

const Upload = () => {
  return (
    <section className="h-screen bg-purple-100 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-3/4" alt="" />
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
              className="w-[400px] h-[200px] border"
            ></textarea>
            <div>
              <button className="rounded-lg bg-purple-700 text-white m-3 p-3 w-1/4">
                Submit
              </button>
            </div>
          </div>
          <div className="font-medium text-xl mt-16 mx-20 flex justify-end hover:underline cursor-pointer ">
            <Link to="/skills">
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

export default Upload;
