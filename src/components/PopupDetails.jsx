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
<<<<<<< HEAD
      <p>Active : {user.active ? "Yes" : "No"}</p>
=======
      <p>
        Active :{" "}
        {user.active ? (
          <span style={{ color: "green" }}>Yes</span>
        ) : (
          <span style={{ color: "red" }}>No</span>
        )}
      </p>
      {user.pix && (
        <div className="picture">
          <a target="_blank" rel="noreferrer" href={user.pix.secure_url}>
            <img src={user.pix.secure_url} alt={user.title} />
          </a>
        </div>
      )}
>>>>>>> image-upload
    </div>
  );
};

export default PopupDetails;
