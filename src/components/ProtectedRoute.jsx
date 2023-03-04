import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if ({ ...rest }.location.state) {
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
