import React from "react";
import { useSelector } from "react-redux";
import AccessDenied from "../pages/AccessDenied";

const Authorization = (WrappedComponent, allowedRoles) =>
  function Profile() {
    const profile = useSelector((state) => state.user.profile);
    console.log(allowedRoles);

    const authorizate = profile.roles.some((r) => allowedRoles.includes(r));
    // const authorizate = profile.roles.every((e) => allowedRoles.includes(e));
    console.log(profile.roles);
    console.log(authorizate);

    if (authorizate) {
      return <WrappedComponent />;
    }
    return <AccessDenied />;
  };

export default Authorization;
