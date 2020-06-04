import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import not from '~/assets/404.jpg';

export default function NotFound() {
  return (
    <Container>
      <img src={not} alt="Página não encontrada" />
      <p>
        Desculpe! o conteúdo ou página que você tentou acessar não foi
        localizado!
        <br /> Utilize o link abaixo para voltar para a Home do nosso site!
      </p>
      <Link to="/" title="Voltar para o Fidelion">
        <i className="fa fa-sign-in" aria-hidden="true" />
        Acesse o Fidelion!
      </Link>
    </Container>
  );
}
