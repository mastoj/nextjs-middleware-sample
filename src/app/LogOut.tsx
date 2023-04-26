"use client";
import React from "react";

type Props = {};

const LogOut = (props: Props) => {
  // handle click should update a cookie with the user name and reload page
  const handleClick = () => {
    document.cookie = `name=";expires=Thu, 01 Jan 1970 00:00:01 GMT";`;
    window.location.reload();
  };

  return (
    <div className="flex gap-2 justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Log out!
      </button>
    </div>
  );
};

export default LogOut;
