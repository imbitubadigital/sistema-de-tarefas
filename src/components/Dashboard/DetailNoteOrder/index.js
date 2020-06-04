import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  BoxDetail, BoxInfo, NotBloq, BoxBloq, BoxBloqLeft, BoxBloqRight,
} from './styles';

class DetailNoteOrder extends Component {
  static propTypes = {
    item: PropTypes.shape({
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
    let txt = '';
    switch (status) {
      case 'paid':
        txt = 'Pago';
        break;
      case 'settled':
        txt = 'Pg Manual';
        break;
      case 'canceled':
        txt = 'Cancelado';
        break;
      case 'block':
        txt = 'Bloqueado';
        break;
      case 'contested':
        txt = 'Contestado';
        break;
      case 'refunded':
        txt = 'Devolvido';
        break;
      default:
        txt = 'Não Identificado';
    }
    return txt;
  }


  render() {
    const { item } = this.props;

    return (
      <BoxDetail>
        <BoxInfo>
          <h4>Histórico de Status</h4>
          {item.notes < 1 ? (
            <NotBloq>Não há dados registrados.</NotBloq>
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

export default DetailNoteOrder;
