import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  categorySuccess,
  categoryFailure,
  categorySelectSuccess,
} from './actions';

export function* loadCat() {
  try {
    const response = yield call(api.get, '/category');
    yield put(categorySuccess(response.data));
  } catch (err) {
    const { response } = err;
    yield put(categoryFailure());
    if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else {
      toast.warning('Erro interno ao ler lista de categorias!');
    }
  }
}
export function* loadCatSelect() {
  try {
    const response = yield call(api.get, '/category-select');
    yield put(categorySelectSuccess(response.data));
  } catch (err) {
    const { response } = err;

    if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else {
      toast.warning('Erro interno ao ler lista de categorias!');
    }
  }
}

export default all([
  takeLatest('@categoty/LOAD_CATEGORY', loadCat),
  takeLatest('@categoty/LOAD_CATEGORY_SELECT', loadCatSelect),
]);
