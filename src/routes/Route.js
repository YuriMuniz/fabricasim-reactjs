import React from "react";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import { Route, Redirect } from "react-router-dom";
import { signOut } from "../store/modules/auth/actions";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const profile = useSelector((state) => state.user.profile);
  const token = useSelector((state) => state.auth.token);
  const { signed } = store.getState().auth;
  const dispatch = useDispatch();

  const decodedToken = jwt.decode(token, { complete: true });
  const dateNow = parseInt((new Date().getTime() / 1000).toFixed(0));

  if (decodedToken) {
    if (decodedToken.payload.exp < dateNow) {
      dispatch(signOut());
      return <Redirect to="/" />;
    }
  }

  // jwt.verify(token, "shhhhh", function (err, decoded) {
  //   if (err) {
  //     /*
  //       err = {
  //         name: 'TokenExpiredError',
  //         message: 'jwt expired',
  //         expiredAt: 1408621000
  //       }
  //     */
  //   }
  // });

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    const authorizateAccessRequestStudent =
      profile.roles.some((e) => ["STUDENT"].includes(e)) &&
      profile.roles.length === 1;

    const authorizateAccessRequestTeacher =
      profile.roles.every((e) => ["TEACHER", "STUDENT"].includes(e)) &&
      profile.roles.length === 2;

    // const authorizateCreateGroups = profile.roles.some((e) =>
    //   ["SUPER", "ADMIN+", "ADMIN"].includes(e)
    // );

    const authorizatePermissions = profile.roles.some((e) =>
      ["SUPER", "ADMIN+", "ADMIN"].includes(e)
    );

    if (authorizateAccessRequestStudent || authorizateAccessRequestTeacher) {
      return <Redirect to="/unauthorized" />;
    }
    if (authorizatePermissions) {
      return <Redirect to="/groups" />;
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
