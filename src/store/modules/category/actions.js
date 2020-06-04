export function loadCategory() {
  return {
    type: '@categoty/LOAD_CATEGORY',
  };
}

export function loadCategorySelect() {
  return {
    type: '@categoty/LOAD_CATEGORY_SELECT',
  };
}

export function categorySelectSuccess(data) {
  return {
    type: '@categoty/CATEGORY_SELECT_SUCCESS',
    payload: { data },
  };
}
export function categorySuccess(data) {
  return {
    type: '@categoty/CATEGORY_SUCCESS',
    payload: { data },
  };
}

export function categoryFailure() {
  return {
    type: '@categoty/CATEGORY_FAILURE',
  };
}
