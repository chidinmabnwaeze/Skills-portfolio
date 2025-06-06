import React, { useState } from "react";

export default function Popup({ popupMessage }) {
  return (
    <div className="popup fixed top-6 w-1/4 rounded-xl border border-purple-700 bg-white p-3 shadow ">
      <div className="flex items-center">
        <i class="bx  bx-check-circle text-2xl text-purple-700 mr-3"></i>
        <p className="text-purple-700">{popupMessage}</p>
      </div>
    </div>
  );
}
