import React from "react";
import { Redirect, Route } from "react-router";
import { useReduxSelector } from "../redux/hooks";

const ProtectedRoute = ({ component: Component }: any) => {
  const user = useReduxSelector((state) => state.user.value);
  console.log("user", user);
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
