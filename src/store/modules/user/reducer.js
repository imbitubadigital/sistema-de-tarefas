import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
  load: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@user/UPDATE_PROFILE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/CREATE_PROFILE_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@user/PROFILE_UPDATE_ADDRESS': {
        draft.loading = true;
        break;
      }
      case '@user/RECOVER_PASSWORD': {
        draft.loading = true;
        break;
      }

      case '@user/UPDATE_PROFILE_FAILURE': {
        draft.loading = false;
        draft.load = false;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        draft.loading = false;
        draft.load = false;
        break;
      }

      case '@user/PROFILE_UPLOAD_AVATAR': {
        draft.load = true;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
