import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function SingleLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

SingleLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
