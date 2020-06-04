import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  BoxDetail, BoxSub, BoxInfo, Icon, Details, NotBloq,
  BoxBloq, BoxBloqLeft, BoxBloqRight, BoxSubImobi,
} from './styles';

import perfil from '~/assets/images/perfil.png';
import noCapa from '~/assets/images/no_capa.jpg';

class DetailReport extends Component {
  static propTypes = {
    item: PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.number,
        username: PropTypes.string,
        lastname: PropTypes.string,
        telephone: PropTypes.string,
        email: PropTypes.string,
        cpf: PropTypes.string,
      }),
      property: PropTypes.shape({
        user: PropTypes.shape({
          id: PropTypes.number,
          username: PropTypes.string,
          lastname: PropTypes.string,
          telephone: PropTypes.string,
          email: PropTypes.string,
          cpf: PropTypes.string,
        }),
        type: PropTypes.shape({
          name: PropTypes.string,
        }),
        finality: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
      created_at: PropTypes.string,
      notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        created_at: PropTypes.string,
        content: PropTypes.string,
        status: PropTypes.string,
        author: PropTypes.shape({
          username: PropTypes.string,
          lastname: PropTypes.string,
        }),
      })),
    }).isRequired,
  };

  setStatusNote = (status) => {
    let Status = '';
    switch (status) {
      case '0':
        Status = 'Inativo';
        break;
      case '1':
        Status = 'Ativo';
        break;
      case '2':
        Status = 'Bloqueado';
        break;
      case 0:
        Status = 'Inativo';
        break;
      case 1:
        Status = 'Ativo';
        break;
      case 2:
        Status = 'Bloqueado';
        break;
      default:
        Status = 'Indefinido';
    }

    return Status;
  };

  setStatus = (status, expiration) => {
    let Status = '';
    switch (status) {
      case 'Incompleto':
        Status = 'Incompleto';
        break;
      case 'Completo':
        Status = 'Completo';
        break;
      case 'Bloqueado':
        Status = 'Bloqueado';
        break;
      case 'Alugado':
        Status = 'Alugado';
        break;
      case 'Pausado':
        Status = 'Pausado';
        break;
      case 'Vendido':
        Status = 'Vendido';
        break;
      case 'Ativo':
        Status = moment(expiration)
          .isAfter(moment().format('YYYY-MM-DD HH:mm:ss'))
          ? 'Ativo'
          : 'Expirado';
        break;
      default:
        Status = 'Incompleto';
    }

    return Status;
  }

  render() {
    const { item } = this.props;

    return (
      <BoxDetail>
        <BoxInfo>
          <h4>Dados do Denunciante</h4>
          <BoxSub>
            <img src={item.user.avatarUrl ? item.user.avatarUrl : perfil} width="150" alt={item.user.username} />
            <div>
              <p>
                <Icon bg="#35358f" className="fa fa-hashtag" aria-hidden="true" />
                <b>Código do denunciante:</b>
                {item.user.id}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-user" aria-hidden="true" />
                <b>Nome:</b>
                {`${item.user.username} ${item.user.lastname}`}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-envelope-o" aria-hidden="true" />
                <b>Email:</b>
                {item.user.email}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-phone " aria-hidden="true" />
                <b>Telefone:</b>
                {item.user.telephone}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-id-card" aria-hidden="true" />
                <b>Cpf:</b>
                {item.user.cpf}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-calendar" aria-hidden="true" />
                <b>Denunciado em:</b>
                {moment(item.created_at).format('DD/MM/YYYY HH:mm:ss')}
              </p>
            </div>
          </BoxSub>
        </BoxInfo>
        <BoxInfo>
          <h4>Imovel Denunciado</h4>
          <BoxSubImobi>
            <img src={item.property.thumbUrl ? item.property.thumbUrl : noCapa} width="150" alt={item.user.username} />
            <div>
              <p>
                <Icon bg="#8fb800" className="fa fa-hashtag" aria-hidden="true" />
                <b>Código do Imóveis:</b>
                {item.property.id}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-home" aria-hidden="true" />
                <b>Imóvel:</b>
                {item.property.title}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-bookmark" aria-hidden="true" />
                <b>Tipo / Finalidade:</b>
                {`${item.property.type.name} / ${item.property.finality.name}`}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-hashtag" aria-hidden="true" />
                <b>Código do Proprietário:</b>
                {item.property.user.id}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-user" aria-hidden="true" />
                <b>Proprietário:</b>
                {`${item.property.user.username} ${item.property.user.lastname}`}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-envelope-o" aria-hidden="true" />
                <b>Email:</b>
                {item.property.user.email}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-phone " aria-hidden="true" />
                <b>Telefone:</b>
                {item.property.user.telephone}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-id-card" aria-hidden="true" />
                <b>Cpf:</b>
                {item.property.user.cpf}
              </p>
              <p>
                <Icon bg="#8fb800" className="fa fa-check-circle" aria-hidden="true" />
                <b>Status:</b>
                {this.setStatus(item.property.status, item.property.expiration)}
              </p>
            </div>
          </BoxSubImobi>
        </BoxInfo>

        <BoxInfo>
          <h4>Conteúdo da Denúncia</h4>
          <Details>
            <div>
              <p>{item.note}</p>
            </div>
          </Details>
        </BoxInfo>

        <BoxInfo>
          <h4>Controle de Bloqueios</h4>
          {item.notes < 1 ? (
            <NotBloq>Não há registro de bloqueios.</NotBloq>
          ) : (
            item.notes.map(n => (
              <BoxBloq key={n.id}>
                <BoxBloqLeft>
                  <p>
                    <b>Data:</b>
                    {moment(n.created_at).format('DD/MM/YYYY HH:mm:ss')}
                  </p>
                  <p>
                    <b>Status:</b>
                    {this.setStatusNote(n.status)}
                  </p>
                </BoxBloqLeft>
                <BoxBloqRight>
                  <p>
                    <b>Author:</b>
                    {`${n.author.username} ${n.author.lastname}`}
                  </p>
                  <p>
                    <b>Motivo:</b>
                    {n.content}
                  </p>
                </BoxBloqRight>
              </BoxBloq>
            ))
          )}
        </BoxInfo>
      </BoxDetail>
    );
  }
}

export default DetailReport;
