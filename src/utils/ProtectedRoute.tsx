import React, { ReactElement } from "react";
import { Redirect, Route } from "react-router";
import { useReduxSelector } from "../redux/hooks";

function  ProtectedRoute ({ component: Component }: any) :ReactElement {
  const user = useReduxSelector((state) => state.user.value);
  console.log("token", user);
  return (
    <Route
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
