import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { money } from '~/utils/format';
import {
  BoxFinancy, BoxHeader, Icon,
} from './styles';

import {
  Table, Tth, Ttd,
} from '~/styles/components/Table';

class FinancyProperty extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        number: PropTypes.string,
        neighborhood: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
      }),
      type: PropTypes.shape({
        name: PropTypes.string,
      }),
      finality: PropTypes.shape({
        name: PropTypes.string,
      }),
      images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        thumbnailUrl: PropTypes.string,
      })),
      features: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })),
      areas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })),
      proximitys: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })),
    }).isRequired,
    capaItem: PropTypes.string.isRequired,
  };

  state = {
    capa: '',
  };

  componentDidMount() {
    const { capaItem } = this.props;
    this.setState({ capa: capaItem });
  }

  showImg = (img) => {
    this.setState({ capa: img });
  }

  checkPlan = (data) => {
    const { id } = data;
    const p = data.order.orderItems.filter(a => a.id === id);
    return `${p[0].plan.id} - ${p[0].plan.name}`;
  }

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

  render() {
    const { capa } = this.state;
    const { item } = this.props;

    return (
      <BoxFinancy>
        <BoxHeader>
          <img src={capa} alt={item.title} width="200" />
          <div>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Imóvel:</b>
              {item.title}
            </p>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Tipo:</b>
              {item.type.name}
            </p>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Finalidade:</b>
              {item.finality.name}
            </p>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Valor</b>
              {money(item.price)}
            </p>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Proprietário]:</b>
              {`${item.user.username} ${item.user.lastname}`}
            </p>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Cadastrado em:</b>
              {moment(item.created_at).format('DD/MM/YYYY HH:mm:ss')}
            </p>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Atualizado em:</b>
              {moment(item.updated_at).format('DD/MM/YYYY HH:mm:ss')}
            </p>
            <p>
              <Icon bg="#E97F02" className="fa fa-check-square-o" aria-hidden="true" />
              <b>Data de Expiração:</b>
              {moment(item.expiration).format('DD/MM/YYYY HH:mm:ss')}
            </p>
          </div>
        </BoxHeader>
        <Table>
          <thead>
            <tr>
              <Tth>Cod</Tth>
              <Tth>Plano</Tth>
              <Tth>Validade</Tth>
              <Tth>Preço</Tth>
              <Tth>Pgto</Tth>
              <Tth>Uso</Tth>
              <Tth>Nº Ped</Tth>
              <Tth>Tipo</Tth>
              <Tth>Meio Pg</Tth>
              <Tth>Cadastro em</Tth>
              <Tth>Atualizado em</Tth>
            </tr>
          </thead>
          <tbody>
            {item.planItems.map(i => (
              <tr key={i.id}>
                <Ttd>{i.id}</Ttd>
                <Ttd>{this.checkPlan(i)}</Ttd>
                <Ttd>{`${i.expiration} dias`}</Ttd>
                <Ttd>{money(i.price)}</Ttd>
                <Ttd>{i.paid === 1 ? 'Sim' : 'Não'}</Ttd>
                <Ttd>{i.used === 1 ? 'Sim' : 'Não'}</Ttd>
                <Ttd>{i.order.id}</Ttd>
                <Ttd>{i.order.type === 'unic' ? 'Único' : 'Pacote'}</Ttd>
                <Ttd>{this.checkGateway(i.order.gateway)}</Ttd>
                <Ttd>{moment(i.created_at).format('DD/MM/YYYY HH:mm:ss')}</Ttd>
                <Ttd>{moment(i.updated_at).format('DD/MM/YYYY HH:mm:ss')}</Ttd>
              </tr>
            ))}
          </tbody>
        </Table>
      </BoxFinancy>
    );
  }
}

export default FinancyProperty;
