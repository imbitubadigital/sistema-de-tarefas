import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/session', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    const { response } = err;
    yield put(signFailure());

    if (
      response &&
      response.status === 401 &&
      response.data.error.name === 'UserNotFoundException'
    ) {
      toast.warning('O e-mail informado não existe em nosso sistema!');
    } else if (
      response &&
      response.status === 401 &&
      response.data.error.name === 'PasswordMisMatchException'
    ) {
      toast.warning('A senha informada não confere!!');
    } else if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else if (response && response.status && response.status === 400) {
      toast.warning(response.data[0].message);
    } else {
      toast.warning('Erro interno ao realizar login!');
    }
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
