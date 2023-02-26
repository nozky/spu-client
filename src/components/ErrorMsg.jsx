import React from "react";
import "./errorMsg.css";

const ErrorMsg = ({ msg }) => {
  return (
    <div className="error-msg">
      <p>{msg}</p>
    </div>
  );
};

export default ErrorMsg;
