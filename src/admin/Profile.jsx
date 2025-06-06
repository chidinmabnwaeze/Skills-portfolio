import React, { useState } from "react";
import { Link } from "react-router-dom";
import blob from "../assets/illustrations/profile illustration.png";
import Popup from "../components/Popup";

const Profile = () => {
  const [inputValue, setInputValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      localStorage.setItem("userProfile", inputValue);
      setPopupMessage(` profileName has been saved successfully`);
    } else {
      setPopupMessage("Please input a valid profile");
    }
    setShowPopup(true);
    console.log(inputValue);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="h-screen bg-purple-100 ">
      <div className="flex items-center justify-between">
        <div className="ml-16 slideLeft">
          <img src={blob} className="h-[600px]" alt="" />
        </div>

        <div className="slideRight">
          {showPopup && <Popup popupMessage={popupMessage} />}
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
