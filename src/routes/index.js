import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

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
      <Route path="/permissions" component={Permissions} isPrivate />
      <Route path="/access-request" component={AccessRequest} isPrivate />
      <Route path="/create-groups" component={CreateGroups} isPrivate />

      <Route path="/" component={() => <h1>404 - Page not found </h1>} />
    </Switch>
  );
}
