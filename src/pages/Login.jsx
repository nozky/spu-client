import React, { useState } from "react";
import "./login.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import { auth } from "../helpers/auth";
import { useUserStore } from "../store/useStore";

const Login = () => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const [userInput, setUserInput] = useState({});
  const history = useHistory();

  if (Object.keys(user).length !== 0) {
    return <Redirect to="/profile" />;
  }

  const submitHandle = async (e) => {
    e.preventDefault();
    const response = await auth(userInput);

    if (response.ok) {
      const result = await response.json();
      setUser(result);
      history.push({ pathname: "/profile" });
    } else {
      alert("Invalid information! Please check and try again.");
    }
  };

  return (
    <div className="login">
      <div className="login-head">
        <h1>SPP</h1>
        <p>Solar Power Philippines</p>
      </div>

      <form onSubmit={(e) => submitHandle(e)}>
        <div>
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name (case sensitive)"
            onChange={(e) =>
              setUserInput((current) => ({
                ...current,
                username: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            autoComplete="true"
            type="password"
            id="password"
            name="password"
            placeholder="Password (case sensitive)"
            onChange={(e) =>
              setUserInput((current) => ({
                ...current,
                password: e.target.value,
              }))
            }
          />
        </div>

        <div className="login-buttons">
          <button className="btn">Log In</button>
        </div>
      </form>

      <div className="home">
        <Link to="/">Back to Map</Link>
      </div>

      <div className="login-signup">
        <p>No Account yet? </p>
        <p>Sign Up! It's free!</p>
        <Link to="/signup">Sign Up Now!</Link>
      </div>
    </div>
  );
};

export default Login;
