import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  dataSelect: [],
  loading: false,
  loadModal: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@categoty/LOAD_CATEGORY': {
        draft.loading = true;
        break;
      }

      case '@categoty/CATEGORY_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        draft.loadModal = false;
        break;
      }

      case '@categoty/CATEGORY_SELECT_SUCCESS': {
        draft.dataSelect = action.payload.data;
        break;
      }

      case '@categoty/CATEGORY_FAILURE': {
        draft.loading = false;
        draft.loadModal = false;
        break;
      }

      default:
    }
  });
}
