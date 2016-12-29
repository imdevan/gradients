import * as types from './action-types';

export const setBackground = (background) => {
  return {
    type: types.RANDOM_BACKGROUND,
    background
  };
}
