export function loadTask(page, perPage, search) {
  return {
    type: '@task/LOAD_TASK',
    payload: { page, perPage, search },
  };
}

export function taskSuccess(data) {
  return {
    type: '@task/TASK_SUCCESS',
    payload: { data },
  };
}

export function taskFailure() {
  return {
    type: '@task/TASK_FAILURE',
  };
}

export function updateStatusTask(id, status) {
  return {
    type: '@task/UPDATE_STATUS_TASK',
    payload: { id, status },
  };
}

export function taskUpdateSuccess(data) {
  return {
    type: '@task/TASK_UPDATE_SUCCESS',
    payload: { data },
  };
}
