import React, { useRef, useEffect } from "react";
import "./nav.css";
import Btn from "./Btn";
import { CgCloseO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useStore";
const Nav = () => {
  const nav = useRef();
  const logout = useUserStore((state) => state.logout);
  const user = useUserStore((state) => state.user);

  // load event
  useEffect(() => {
    if (nav.current) {
      nav.current
        .querySelector(".navCloseBtn")
        .addEventListener("click", () => {
          nav.current.classList.remove("show");
        });
      nav.current.addEventListener("click", () => {
        nav.current.classList.remove("show");
      });
    }
  });

  return (
    <div className="nav" ref={nav}>
      <ul>
        {Object.keys(user).length === 0 ? null : (
          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        )}
        <li>
          <Link to="/">Map</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Btn className={"navCloseBtn"} icon={<CgCloseO />} />
    </div>
  );
};

export default Nav;
