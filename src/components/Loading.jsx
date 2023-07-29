import React from "react";
import "./loading.css";
import { BiSun } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="loading">
      <BiSun className="icon" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
