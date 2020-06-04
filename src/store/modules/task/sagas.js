import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { taskSuccess, taskFailure, taskUpdateSuccess } from './actions';

export function* loadTasks({ payload }) {
  const { page, perPage, search } = payload;
  try {
    const response = yield call(
      api.get,
      `/task?page=${page}&perPage=${perPage}&search=${search}`
    );
    yield put(taskSuccess(response.data));
  } catch (err) {
    const { response } = err;
    yield put(taskFailure());
    if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else {
      toast.warning('Erro interno ao ler lista de tarefas!');
    }
  }
}

export function* updateStatusTask({ payload }) {
  const { id, status } = payload;
  try {
    const response = yield call(api.put, `task-status/${id}`, {
      status,
    });
    yield put(taskUpdateSuccess(response.data));
    toast.success('Status atualizado com sucesso!');
  } catch (err) {
    const { response } = err;
    yield put(taskFailure());
    if (response && response.status && response.status === 401) {
      toast.warning(response.data.error.message);
    } else {
      toast.warning('Erro interno ao ler lista de empresas!');
    }
  }
}

export default all([
  takeLatest('@task/LOAD_TASK', loadTasks),
  takeLatest('@task/UPDATE_STATUS_TASK', updateStatusTask),
]);
