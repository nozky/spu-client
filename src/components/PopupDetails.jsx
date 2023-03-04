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
      <div className="picture">
        <a
          target="_blank"
          href="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        >
          <img
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt={user.title}
          />
        </a>
      </div>
    </div>
  );
};

export default PopupDetails;
