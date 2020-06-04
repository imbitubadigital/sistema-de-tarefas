import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Breadcrumb = ({ title, children }) => (
  <Container>
    <h1>{title}</h1>
    <ul>{children}</ul>
  </Container>
);

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Breadcrumb;
