import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { money } from '~/utils/format';
import noCapa from '~/assets/images/no_capa.jpg';
import {
  BoxFinancy, BoxCapa,
} from './styles';

import {
  Table, Tth, Ttd,
} from '~/styles/components/Table';

class OrderItems extends Component {
  static propTypes = {
    data: PropTypes.shape({
      orderItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        plan: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
        expiration: PropTypes.string,
        price: PropTypes.string,
        used: PropTypes.number,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
        planItems: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbUrl: PropTypes.string,
        })),
      })),
    }),
  };

  static defaultProps = {
    data: null,
  };

  checkGateway = (data) => {
    switch (data) {
      case 'ci':
        return 'Cielo';
      case 'fr':
        return 'Bônus';
      default:
        return 'Gerencianet';
    }
  }

  setCapa = (item) => {
    if (item.used !== 1) return '-';
    return (
      <BoxCapa
        src={item.planItems[0].thumbUrl ? item.planItems[0].thumbUrl : noCapa}
        alt={item.planItems.title}
      />
    );
  }

  setTitle = (item) => {
    if (item.used !== 1) return '-';
    return `${item.planItems[0].id} - ${item.planItems[0].title}`;
  }

  render() {
    const { data: { orderItems } } = this.props;
    return (
      <BoxFinancy>
        <Table>
          <thead>
            <tr>
              <Tth>Cod</Tth>
              <Tth>Plano</Tth>
              <Tth>Validade</Tth>
              <Tth>Preço</Tth>
              <Tth>Uso</Tth>
              <Tth>Cadastro em</Tth>
              <Tth>Atualizado em</Tth>
              <Tth>Imóvel</Tth>
              <Tth>Title</Tth>
            </tr>
          </thead>
          <tbody>
            {orderItems.map(i => (
              <tr key={i.id}>
                <Ttd>{i.id}</Ttd>
                <Ttd>{`${i.plan.id} - ${i.plan.name}`}</Ttd>
                <Ttd>{`${i.expiration} dias`}</Ttd>
                <Ttd>{money(i.price)}</Ttd>
                <Ttd>{i.used === 1 ? 'Sim' : 'Não'}</Ttd>
                <Ttd>{moment(i.created_at).format('DD/MM/YYYY HH:mm:ss')}</Ttd>
                <Ttd>{moment(i.updated_at).format('DD/MM/YYYY HH:mm:ss')}</Ttd>
                <Ttd>{this.setCapa(i)}</Ttd>
                <Ttd>{this.setTitle(i)}</Ttd>
              </tr>
            ))}
          </tbody>
        </Table>
      </BoxFinancy>
    );
  }
}

export default OrderItems;
