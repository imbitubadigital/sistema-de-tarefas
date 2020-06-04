import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '~/components/Dashboard/Breadcrumb';
import { BoxCentral, Box, ContentBox } from '~/styles/components/Boxes';
import { Info, Detail, BoxInfo } from './styles';

import tarefas from '~/assets/tarefas.png';

export default function Initial() {
  return (
    <>
      <Breadcrumb title="Dashboard">
        <li>
          <Link to="/dashboard/home" title="Dashboard">
            Dashboard
          </Link>
        </li>
      </Breadcrumb>

      <BoxCentral justify="center" align="flex-start">
        <Box basis={60}>
          <header>
            <h2>Projeto</h2>
          </header>
          <Info to="/dashboard/imoveis" title="university">
            <span>
              <i className="fa fa-university" aria-hidden="true" />
            </span>
            <div>
              <h3>Desafio Sistema de Tarefas Categorizadas</h3>
            </div>
          </Info>
          <ContentBox>
            <Detail>
              <img src={tarefas} alt="Sistema de Tarefas" />
              <BoxInfo>
                <p>
                  <strong>Projeto:</strong> Sistema de Tarefas
                </p>
                <p>
                  <strong>Desenvolvido por:</strong> Antonio Joaquim Fernandes
                </p>
                <p>
                  <strong>Tecnologia Front-end:</strong> React, Redux,
                  Redux-saga
                </p>
                <p>
                  <strong>Tecnologia Back-end:</strong>Node, AdonisJs
                </p>
              </BoxInfo>
            </Detail>
          </ContentBox>
        </Box>
      </BoxCentral>
    </>
  );
}
