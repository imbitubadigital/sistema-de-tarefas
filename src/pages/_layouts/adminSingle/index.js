import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ContentPage } from './styles';

export default function AdminSingleLayout({ children }) {
  return (
    <Wrapper>
      <ContentPage>{children}</ContentPage>
    </Wrapper>
  );
}

AdminSingleLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
