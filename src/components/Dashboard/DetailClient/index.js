import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  BoxDetail, BoxSub, BoxInfo, Icon, Address, Details, NotBloq,
  BoxBloq, BoxBloqLeft, BoxBloqRight, Immobiles,
} from './styles';

class DetailClient extends Component {
  static propTypes = {
    capaItem: PropTypes.string.isRequired,
    item: PropTypes.shape({
      __meta__: PropTypes.shape({
        TotalProperties: PropTypes.number,
        TotalOrders: PropTypes.number,
      }),
      username: PropTypes.string,
      lastname: PropTypes.string,
      telephone: PropTypes.string,
      email: PropTypes.string,
      cpf: PropTypes.string,
      birthDate: PropTypes.string,
      sexo: PropTypes.string,
      created_at: PropTypes.string,
      pudated_at: PropTypes.string,
      notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        created_at: PropTypes.string,
        content: PropTypes.string,
        status: PropTypes.number,
        author: PropTypes.shape({
          username: PropTypes.string,
          lastname: PropTypes.string,
        }),
      })),
      address: PropTypes.shape({
        street: PropTypes.string,
        number: PropTypes.string,
        neighborhood: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
      }),
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

  checkSexo = (sexo) => {
    let txt = '';
    switch (sexo) {
      case 'F':
        txt = 'Feminino';
        break;
      case 'M':
        txt = 'Masculino';
        break;
      default:
        txt = 'Não informado';
    }
    return txt;
  }

  setTypeClient = (broken, immobiles) => {
    let type = 'Cliente Comum';
    if (broken) {
      type = `Cliente Corretor - Creci: ${broken}`;
    }
    if (immobiles.length > 0) {
      type = 'Proprietário de Imobiliária';
    }
    return type;
  };

  render() {
    const { item, capaItem } = this.props;
    const { __meta__: { TotalProperties, TotalOrders } } = item;

    return (
      <BoxDetail>
        <BoxSub>
          <img src={capaItem} width="200" alt={item.title} />
          <div>
            <p>
              <Icon bg="#35358f" className="fa fa-address-card" aria-hidden="true" />
              <b>Tipo:</b>
              {this.setTypeClient(item.broken, item.immobiles)}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-user" aria-hidden="true" />
              <b>Nome:</b>
              {`${item.username} ${item.lastname}`}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-envelope-o" aria-hidden="true" />
              <b>Email:</b>
              {`${item.email}`}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-phone " aria-hidden="true" />
              <b>Telefone:</b>
              {`${item.telephone}`}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-id-card" aria-hidden="true" />
              <b>Cpf:</b>
              {`${item.cpf}`}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-calendar-check-o" aria-hidden="true" />
              <b>Data de Nascimento:</b>
              {item.birthDate ? moment(item.birthDate).format('DD/MM/YYYY') : 'Não Informada'}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-compass" aria-hidden="true" />
              <b>Sexo:</b>
              {this.checkSexo(item.sexo)}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-calendar" aria-hidden="true" />
              <b>Cadastrado em:</b>
              {moment(item.created_at).format('DD/MM/YYYY HH:mm:ss')}
            </p>
            <p>
              <Icon bg="#35358f" className="fa fa-calendar" aria-hidden="true" />
              <b>Atualizado em:</b>
              {moment(item.updated_at).format('DD/MM/YYYY HH:mm:ss')}
            </p>
          </div>
        </BoxSub>
        <BoxInfo>
          <h4>Endereço do Cliente</h4>
          <Address>
            <div>
              {!item.address || !item.address.cep ? (
                <p>
                  <Icon bg="#d60000" className="fa fa-info" aria-hidden="true" />
                  <b>Endereço:</b>
                  Não informado
                </p>
              ) : (
                <>
                  <p>
                    <Icon bg="#d60000" className="fa fa-map-marker" aria-hidden="true" />
                    <b>CEP:</b>
                    {item.address.cep}
                  </p>
                  <p>
                    <Icon bg="#d60000" className="fa fa-map-marker" aria-hidden="true" />
                    <b>Rua:</b>
                    {`${item.address.street} ${item.address.number} - ${item.address.neighborhood}`}
                  </p>
                  <p>
                    <Icon bg="#d60000" className="fa fa-map-marker" aria-hidden="true" />
                    <b>Cidade:</b>
                    {`${item.address.city}/${item.address.state}`}
                  </p>
                </>
              )}
            </div>
          </Address>
        </BoxInfo>

        <BoxInfo>
          <h4>Imóveis/Pedidos</h4>
          <Details>
            <div>
              <p>
                <Icon bg="#3B8686" className="fa fa-home" aria-hidden="true" />
                <b>Imóveis Cadatrados:</b>
                {TotalProperties < 1 ? 'Nenhum' : TotalProperties}
              </p>
              <p>
                <Icon bg="#3B8686" className="fa fa-university  " aria-hidden="true" />
                <b>Pedidos:</b>
                {TotalOrders < 1 ? 'Nenhum' : TotalOrders}
              </p>
            </div>
          </Details>
        </BoxInfo>
        {item.immobiles.length > 0 && (
          <BoxInfo>
            <h4>Imobiliárias</h4>
            {item.immobiles.map(i => (
              <Immobiles key={i.id}>
                <img src={i.logoUrl} width="200" alt={item.title} />
                <div>
                  <p>
                    <Icon bg="#8fb800" className="fa fa-university" aria-hidden="true" />
                    <b>Nome:</b>
                    {i.name}
                  </p>
                  <p>
                    <Icon bg="#8fb800" className="fa fa-address-card" aria-hidden="true" />
                    <b>CNPJ:</b>
                    {i.cnpj}
                  </p>
                  <p>
                    <Icon bg="#8fb800" className="fa fa-desktop" aria-hidden="true" />
                    <b>Site:</b>
                    {i.site ? i.site : 'Não informado'}
                  </p>
                  {!i.address || !i.address.cep ? (
                    <p>
                      <Icon bg="#8fb800" className="fa fa-info" aria-hidden="true" />
                      <b>Endereço:</b>
                      Não informado
                    </p>
                  ) : (
                    <>
                      <p>
                        <Icon bg="#8fb800" className="fa fa-map-marker" aria-hidden="true" />
                        <b>Rua:</b>
                        {`${i.address.street} ${i.address.number} - ${i.address.neighborhood}`}
                      </p>
                      <p>
                        <Icon bg="#8fb800" className="fa fa-map-marker" aria-hidden="true" />
                        <b>CEP:</b>
                        {i.address.cep}
                      </p>
                      <p>
                        <Icon bg="#8fb800" className="fa fa-map-marker" aria-hidden="true" />
                        <b>Cidade:</b>
                        {`${i.address.city}/${i.address.state}`}
                      </p>
                    </>
                  )}
                </div>
              </Immobiles>
            ))}
          </BoxInfo>
        )}

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

export default DetailClient;
