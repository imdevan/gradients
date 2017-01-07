export function doToast(toast) {
  return {
    type: 'DO_TOAST',
    toast
  }
}

export function changeColors(colors) {
  return {
    type: 'CHANGE_COLORS',
    colors
  }
}
export function changeDirection(direction) {
  return {
    type: 'CHANGE_DIRECTION',
    direction
  }
}
