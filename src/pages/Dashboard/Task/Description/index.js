import React from 'react';
import PropTypes from 'prop-types';
import { BoxFinancy } from './styles';
import { Table, Tth, Ttd } from '~/styles/components/Table';

export default function Description({ data }) {
  return (
    <BoxFinancy>
      <Table>
        <thead>
          <tr>
            <Tth>
              <b>Confira os detalhes</b>
            </Tth>
          </tr>
        </thead>
        <tbody>
          <tr key={1}>
            <Ttd>
              <textarea>{data.description}</textarea>
            </Ttd>
          </tr>
        </tbody>
      </Table>
    </BoxFinancy>
  );
}

Description.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
  }),
};

Description.defaultProps = {
  data: null,
};
