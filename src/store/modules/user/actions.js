export function createProfileRequest(data) {
  return {
    type: '@user/CREATE_PROFILE_REQUEST',
    payload: { data },
  };
}
export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function recoverPassword(old_password, password, password_confirmation) {
  return {
    type: '@user/RECOVER_PASSWORD',
    payload: { old_password, password, password_confirmation },
  };
}
