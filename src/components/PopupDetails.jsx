import React from "react";
import "./popupDetails.css";

const PopupDetails = ({ user }) => {
  return (
    <div className="popup-details">
      <p>{user.details.name}</p>
      <p>
        System power :{" "}
        {user.details.power < 1
          ? user.details.power.toFixed(3)
          : user.details.power.toFixed(0)}{" "}
        kw
      </p>
      <p>{user.details.info}</p>
      <p>
        Contact :{" "}
        <span>
          <a href={`mailto: ${user.email}`}>{user.email}</a>{" "}
        </span>
      </p>
      <p>Active : {user.active ? "Yes" : "No"}</p>
    </div>
  );
};

export default PopupDetails;
