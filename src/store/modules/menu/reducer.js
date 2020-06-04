import produce from 'immer';

const INITIAL_STATE = {
  menuVisible: true,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@menu/SHOW_HIDE_MENU': {
        draft.menuVisible = !draft.menuVisible;
        break;
      }

      case '@menu/SHOW_MENU': {
        draft.menuVisible = true;
        break;
      }

      default:
    }
  });
}
