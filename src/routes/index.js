import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Authorization from "./Authorization";
import Profile from "../pages/Profile";
import Permissions from "../pages/Permissions";
import AccessRequest from "../pages/AccessRequest";
import CreateGroups from "../pages/CreateGroups";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route
        path="/permissions"
        component={Authorization(Permissions, ["SUPER", "ADMIN+", "ADMIN"])}
        isPrivate
      />

      <Route
        path="/access-request"
        component={Authorization(AccessRequest, ["STUDENT"])}
        isPrivate
      />

      <Route
        path="/create-groups"
        component={Authorization(CreateGroups, [
          "SUPER",
          "ADMIN+",
          "ADMIN",
          "TEACHER",
        ])}
        isPrivate
      />

      <Route path="/" component={() => <h1>404 - Page not found </h1>} />
    </Switch>
  );
}
