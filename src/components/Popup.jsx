import React, { useState } from "react";

export default function Popup({ text, popupMessage }) {
  const [textItem, setTextItem] = useState("");

  //   const handlePopup = () => {
  //     if (textItem && onclick === true) {
  //       return "Profile has been saved successfully";
  //     } else if (!textItem && onclick === true) {
  //       return "Pls input a valid profile";
  //     } else {
  //       return "Profile could not be saved, an error occurred.";
  //     }
  //   };

  return (
    <div className="popup border ">
      <div>
        <i></i>
        <p>{popupMessage}</p>
      </div>
    </div>
  );
}
