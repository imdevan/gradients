function colors(state = [], action) {
  switch(action.type) {
    case 'CHANGE_DIRECTION' :
      return action.direction
    default:
      return state;
  }
}

export default colors;
