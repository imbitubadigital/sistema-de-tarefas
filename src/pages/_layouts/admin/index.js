import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Wrapper, Content, ContentPage, FakeFooter, Footer } from './styles';

import Menu from '~/components/Dashboard/Menu';
import Header from '~/components/Dashboard/Header';
import logoFooter from '~/assets/logo_footer.png';

export default function AuthLayout({ children }) {
  const menuVisible = useSelector(state => state.menu.menuVisible);
  return (
    <Wrapper>
      <Header />
      <Menu />
      <Content show={menuVisible}>
        <ContentPage>{children}</ContentPage>
        <FakeFooter />
        <Footer>
          <p>
            Copyright
            <span>© 2019</span>
          </p>
          <p>
            Todos os direitos
            <span>reservados.</span>
          </p>
          <img src={logoFooter} alt="Mapa Imóveis" />
        </Footer>
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
