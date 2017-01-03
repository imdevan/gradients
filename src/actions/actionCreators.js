// increment
export function doToast(toast) {
  return {
    type: 'DO_TOAST',
    toast
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
