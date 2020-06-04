import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '~/pages/_layouts/default';
import AdminLayout from '~/pages/_layouts/admin';
import SingleLayout from '~/pages/_layouts/single';
import AdminSingleLayout from '~/pages/_layouts/adminSingle';

import { store } from '~/store';

export default function RouteWeapper({
  component: Component,
  isPrivate = false,
  typeLayout,
  ...rest
}) {
  const { signed } = store.getState().auth;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  let Layout = null;

  switch (typeLayout) {
    case 'site':
      Layout = DefaultLayout;
      break;
    case 'admin':
      Layout = AdminLayout;
      break;
    case 'admin-single':
      Layout = AdminSingleLayout;
      break;
    case 'single':
      Layout = SingleLayout;
      break;
    default:
      Layout = AdminLayout;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWeapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  typeLayout: PropTypes.string,
};

RouteWeapper.defaultProps = {
  isPrivate: false,
  typeLayout: null,
};
