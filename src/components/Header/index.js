import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Container, Content, MenuMobile } from './styles';
import history from '~/services/history';

export default function Header() {
  const [open, setOpen] = useState(false);
  function setMenu() {
    setOpen(!open);
  }
  return (
    <Container>
      <Content>
        <h1>Tecmite</h1>
        <MenuMobile open={open}>
          <NavLink
            onClick={setMenu}
            to="/#home"
            title="Página Home"
            activeClassName={
              history.location.hash === '#home' ? 'activeLink' : 'off'
            }
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            Home
          </NavLink>

          <NavLink
            onClick={setMenu}
            to="/#app-empresa"
            title="Aplicativo Empresa"
            activeClassName={
              history.location.hash === '#app-empresa' ? 'activeLink' : 'off'
            }
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            App Empresa
          </NavLink>
          <NavLink
            onClick={setMenu}
            to="/#app-cliente"
            title="Aplicativo Cliente"
            activeClassName={
              history.location.hash === '#app-cliente' ? 'activeLink' : 'off'
            }
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            App Cliente
          </NavLink>

          <NavLink
            onClick={setMenu}
            to="/#planos-precos"
            title="Planos e Preços"
            activeClassName={
              history.location.hash === '#planos-precos' ? 'activeLink' : 'off'
            }
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            Planos e Preços
          </NavLink>
          <a
            href="https://fidelion2.s3-sa-east-1.amazonaws.com/cartaz.pdf"
            title="Baixe o Cartaz FideliOn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cartaz
          </a>

          <NavLink
            onClick={setMenu}
            to="/#contato"
            title="Fale Conosco"
            activeClassName={
              history.location.hash === '#contato' ? 'activeLink' : 'off'
            }
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          >
            Contato
          </NavLink>
        </MenuMobile>
        <i
          className={open ? 'fa fa-times' : 'fa fa-bars'}
          aria-hidden="true"
          onClick={setMenu}
        />
      </Content>

      {/*   <ContentFakeMenu open={open}>sdfdf</ContentFakeMenu> */}
    </Container>
  );
}
