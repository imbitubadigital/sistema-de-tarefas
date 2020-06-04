import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* createProfile({ payload }) {
  try {
    const { username, email, password, password_confirmation } = payload.data;

    yield call(api.post, 'users', {
      username,
      email,
      password,
      password_confirmation,
    });

    toast.success('Cadastro realizado com sucesso! Faça seu login');

    yield put(updateProfileFailure());
    history.push('/');
  } catch (err) {
    const { response } = err;
    yield put(updateProfileFailure());

    if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else if (response && response.status && response.status === 400) {
      toast.warning(response.data[0].message);
    } else {
      toast.error('Erro interno ao atualizar perfil!');
    }
  }
}
export function* updateProfile({ payload }) {
  try {
    const { username } = payload.data;

    const response = yield call(api.put, 'profile', {
      username,
    });

    yield put(updateProfileSuccess(response.data));

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileFailure());
  } catch (err) {
    const { response } = err;
    yield put(updateProfileFailure());

    if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else if (response && response.status && response.status === 400) {
      toast.warning(response.data[0].message);
    } else {
      toast.error('Erro interno ao atualizar perfil!');
    }
  }
}

export function* passwordRecover({ payload }) {
  try {
    const { old_password, password, password_confirmation } = payload;

    yield call(api.put, 'recover', {
      old_password,
      password,
      password_confirmation,
    });

    toast.success('Senha alterada com sucesso!');
    yield put(updateProfileFailure());
  } catch (err) {
    const { response } = err;
    yield put(updateProfileFailure());

    if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else if (response && response.status && response.status === 400) {
      toast.warning(response.data[0].message);
    } else {
      toast.error('Erro interno ao atualizar senha!');
    }
  }
}

export default all([
  takeLatest('@user/CREATE_PROFILE_REQUEST', createProfile),
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/RECOVER_PASSWORD', passwordRecover),
]);
