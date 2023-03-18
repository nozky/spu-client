import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserStore } from "../store/useStore";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useUserStore((state) => state.user);

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (Object.keys(user).length !== 0) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </>
  );
};

export default ProtectedRoute;
