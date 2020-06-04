import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { money } from '~/utils/format';
import {
  BoxDetail, BoxSub, BoxMini, BoxInfo, Icon, Address, Details, NotBloq,
  BoxBloq, BoxBloqLeft, BoxBloqRight,
} from './styles';

class DetailProperty extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
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

  setQtd = (qtd) => {
    let qt = '0';
    if (qtd === null) {
      qt = '0';
    } else if (qtd === 5) {
      qt = '+ 5';
    } else {
      qt = qtd;
    }
    return qt;
  }

  render() {
    const { capa } = this.state;
    const { item } = this.props;

    return (
      <BoxDetail>
        <BoxSub>
          <span>{`${item.type.name} - ${item.finality.name}`}</span>
          {item.price && (
            <span>{money(item.price)}</span>
          )}
        </BoxSub>
        <img src={capa} alt={item.title} />
        {item.images.length > 0 && (
          <BoxMini>
            {item.images.map(t => (
              <div key={t.id}>
                <button type="button" onClick={() => this.showImg(t.thumbnailUrl)}>
                  <img src={t.thumbnailUrl} alt={item.title} />
                </button>
              </div>
            ))}
          </BoxMini>
        )}
        <p>{item.description ? item.description : 'Descrição não informada'}</p>

        <BoxInfo>
          <h4>+ Detalhes do Imóvel</h4>
          <Details>
            <div>
              {item.bulitArea && (
                <p>
                  <Icon bg="#3B8686" className="fa fa-line-chart" aria-hidden="true" />
                  <b>Área Construída:</b>
                  {`${item.bulitArea} m²`}
                </p>
              )}
              {item.totalArea && (
                <p>
                  <Icon bg="#3B8686" className="fa fa-line-chart" aria-hidden="true" />
                  <b>Área Total:</b>
                  {`${item.totalArea} m²`}
                </p>
              )}
              {item.iptu && (
                <p>
                  <Icon bg="#3B8686" className="fa fa-usd" aria-hidden="true" />
                  <b>Iptu:</b>
                  {item.iptu > 0 ? money(item.iptu) : '0'}
                </p>
              )}
              {item.condominium && (
                <p>
                  <Icon bg="#3B8686" className="fa fa-usd" aria-hidden="true" />
                  <b>Condomínio:</b>
                  {item.condominium > 0 ? money(item.condominium) : '0'}
                </p>
              )}

              {item.type.id !== 7 && item.type.id !== 8
              && item.type.id !== 9 && item.type.id !== 10
              && item.type.id !== 11 && item.type.id !== 23 && (
                <>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-users" aria-hidden="true" />
                    <b>Salas:</b>
                    {this.setQtd(item.rooms)}
                  </p>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-coffee" aria-hidden="true" />
                    <b>Cozinha:</b>
                    {this.setQtd(item.kitchen)}
                  </p>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-bed" aria-hidden="true" />
                    <b>Quartos:</b>
                    {this.setQtd(item.badrooms)}
                  </p>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-shower" aria-hidden="true" />
                    <b>Banheiros:</b>
                    {this.setQtd(item.bathrooms)}
                  </p>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-bath" aria-hidden="true" />
                    <b>Suites:</b>
                    {this.setQtd(item.suites)}
                  </p>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-car" aria-hidden="true" />
                    <b>Garagens:</b>
                    {this.setQtd(item.garages)}
                  </p>
                </>
              )}
              {(item.type.id === 4 || item.type.id === 14 || item.type.id === 21) && (
                <>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-building" aria-hidden="true" />
                    <b>Nº do andar:</b>
                    {item.unit_floors > 0 ? item.unit_floors : '0'}
                  </p>
                  <p>
                    <Icon bg="#3B8686" className="fa fa-building-o" aria-hidden="true" />
                    <b>Total de Andares:</b>
                    {item.floors > 0 ? item.floors : '0'}
                  </p>
                </>
              )}
            </div>
          </Details>
        </BoxInfo>

        {item.features.length > 0 && (
          <BoxInfo>
            <h4>Características do Imóvel</h4>
            <div>
              {item.features.map(f => (
                <p key={f.id}>
                  <Icon bg="#8fb800" className="fa fa-check" aria-hidden="true" />
                  {f.name}
                </p>
              ))}
            </div>
          </BoxInfo>
        )}

        {item.areas.length > 0 && (
          <BoxInfo>
            <h4>Áreas Comuns do Imóvel</h4>
            <div>
              {item.areas.map(f => (
                <p key={f.id}>
                  <Icon bg="#0085b2" className="fa fa-check" aria-hidden="true" />
                  {f.name}
                </p>
              ))}
            </div>
          </BoxInfo>
        )}

        {item.proximitys.length > 0 && (
          <BoxInfo>
            <h4>Proximidades do Imóvel</h4>
            <div>
              {item.proximitys.map(f => (
                <p key={f.id}>
                  <Icon bg="#b200b2" className="fa fa-check" aria-hidden="true" />
                  {f.name}
                </p>
              ))}
            </div>
          </BoxInfo>
        )}

        {item.address.cep && (
          <BoxInfo>
            <h4>Endereço do Imóvel</h4>
            <Address>
              <div>
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
              </div>
            </Address>
          </BoxInfo>
        )}

        <BoxInfo>
          <h4>Proprietário do Imóvel</h4>
          <Address>
            <div>
              <p>
                <Icon bg="#35358f" className="fa fa-user" aria-hidden="true" />
                <b>Nome:</b>
                {`${item.user.username} ${item.user.lastname}`}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-envelope-o" aria-hidden="true" />
                <b>Email:</b>
                {`${item.user.email}`}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-phone " aria-hidden="true" />
                <b>Telefone:</b>
                {`${item.user.telephone}`}
              </p>
              <p>
                <Icon bg="#35358f" className="fa fa-id-card" aria-hidden="true" />
                <b>Cpf:</b>
                {`${item.user.cpf}`}
              </p>
            </div>
          </Address>
        </BoxInfo>

        <BoxInfo>
          <h4>Controle de Datas</h4>
          <Address>
            <div>
              <p>
                <Icon bg="#E97F02" className="fa fa-calendar" aria-hidden="true" />
                <b>Cadastrado em:</b>
                {moment(item.created_at).format('DD/MM/YYYY HH:mm:ss')}
              </p>
              <p>
                <Icon bg="#E97F02" className="fa fa-calendar" aria-hidden="true" />
                <b>Última atualização em:</b>
                {moment(item.updated_at).format('DD/MM/YYYY HH:mm:ss')}
              </p>
              <p>
                <Icon bg="#E97F02" className="fa fa-calendar" aria-hidden="true" />
                <b>Data de Expiração:</b>
                {moment(item.expiration).format('DD/MM/YYYY HH:mm:ss')}
              </p>
            </div>
          </Address>
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
                    {n.status}
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

export default DetailProperty;
