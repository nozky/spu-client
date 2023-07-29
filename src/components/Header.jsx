import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import UserCount from "./UserCount";
import { useUserStore } from "../store/useStore";

const Header = ({ userCount }) => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="header">
      <div className="user-info">
        {user && (
          <p>
            Welcome{" "}
            <Link to="/profile">
              <span>{user.username} </span>
            </Link>
            ||
          </p>
        )}
        <UserCount userCount={userCount} />
      </div>
      <h1>
        <span style={{ color: "yellow" }}>S</span>
        <span style={{ color: "red" }}>P</span>P
      </h1>
      <p>
        {" "}
        <span>Solar</span> Power Philippines
      </p>
    </div>
  );
};

export default Header;
