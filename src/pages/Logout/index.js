import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

export default function Logout({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    function actionLogout() {
      dispatch(signOut());
      toast.info('Você foi deslogado com sucesso!');
      history.push('/');
    }
    actionLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div />;
}

Logout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
