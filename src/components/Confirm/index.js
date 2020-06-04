import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/styles/components/Button';
import { Container, Content, Btns } from './styles';

export default function Confirm({ visible, question, action, close }) {
  return (
    <Container visible={visible}>
      <Content>
        <h4>{question}</h4>
        <Btns>
          <Button size="default" color="danger" onClick={action}>
            <i className="fa fa-check" aria-hidden="true" />
            EXCLUÍR
          </Button>
          <Button size="default" color="gray" onClick={close}>
            <i className="fa fa-times" aria-hidden="true" />
            NÃO
          </Button>
        </Btns>
      </Content>
    </Container>
  );
}

Confirm.propTypes = {
  action: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  question: PropTypes.string,
};

Confirm.defaultProps = {
  question: null,
};
