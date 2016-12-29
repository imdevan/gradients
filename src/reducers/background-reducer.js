import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.REFRESH_BACKGROUND:
      return {...state, background: action.backgroundColor};
    default:
      return state;
  }
};
