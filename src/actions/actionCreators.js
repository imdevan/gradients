// Do toast
export function doToast(toast) {
  return {
    type: 'DO_TOAST',
    toast
  }
}

// Change colors
export function changeColors(colors) {
  return {
    type: 'CHANGE_COLORS',
    colors
  }
}
