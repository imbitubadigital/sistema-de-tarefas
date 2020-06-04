import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.png';
import { Container, BoxLeft, Logo, BoxRight } from './styles';
import { showHideMenu } from '~/store/modules/menu/actions';

export default function Header() {
  const { username } = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleMenu() {
    dispatch(showHideMenu());
  }
  return (
    <Container>
      <BoxLeft>
        <Logo>
          <img src={logo} title="FideliOn" alt="FideliOn" />
        </Logo>
        <i className="fa fa-bars" aria-hidden="true" onClick={handleMenu} />
      </BoxLeft>
      <BoxRight>
        <p>
          Bem vindo(a)
          <span>{username}</span>
        </p>
      </BoxRight>
    </Container>
  );
}
