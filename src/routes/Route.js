import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const profile = useSelector((state) => state.user.profile);
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    const authorizateAccessRequest =
      profile.roles.some((e) => ["STUDENT"].includes(e)) &&
      profile.roles.length === 1;

    const authorizateCreateGroups = profile.roles.some((e) =>
      ["SUPER", "ADMIN+", "ADMIN", "TEACHER"].includes(e)
    );

    const authorizatePermissions = profile.roles.some((e) =>
      ["SUPER", "ADMIN+", "ADMIN"].includes(e)
    );

    if (authorizateAccessRequest && profile.roles.length === 1) {
      return <Redirect to="/access-request" />;
    }
    if (authorizatePermissions) {
      return <Redirect to="/permissions" />;
    }
    if (authorizateCreateGroups) {
      return <Redirect to="/create-groups" />;
    }
  }

  // if (authorizateAccessRequest && profile.roles.length === 1) {
  //   return <Redirect to="/access-request" />;
  // }
  // if (authorizateCreateGroups) {
  //   return <Redirect to="/create-groups" />;
  // }
  // if (authorizatePermissions) {
  //   return <Redirect to="/permissions" />;
  // }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
