import {SET_BACKGROUND} from './actionTypes';

// increment
export function increment(index) {
  return {
    type: SET_BACKGROUND,
    index
  }
}

// add comment
export function changeColors(colors) {
  return {
    type: 'CHANGE_COLORS',
    colors
  }
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
