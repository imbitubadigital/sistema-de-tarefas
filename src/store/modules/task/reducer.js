import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  page: 1,
  totalRows: 0,
  lastPage: 1,
  perPage: 10,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@task/LOAD_TASK': {
        draft.loading = true;
        break;
      }

      case '@task/TASK_SUCCESS': {
        draft.data = action.payload.data.data;
        draft.loading = false;
        draft.page = action.payload.data.page;
        draft.perPage = action.payload.data.perPage;
        draft.lastPage = action.payload.data.lastPage;
        draft.totalRows = action.payload.data.total;
        break;
      }

      case '@task/TASK_FAILURE': {
        draft.loading = false;
        draft.loadModal = false;
        break;
      }

      case '@task/TASK_UPDATE_SUCCESS': {
        const taskIndex = draft.data.findIndex(
          c => c.id === action.payload.data.id
        );

        if (taskIndex >= 0) {
          draft.data[taskIndex] = action.payload.data;
        }

        break;
      }

      default:
    }
  });
}
