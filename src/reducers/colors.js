function colors(state = [], action) {
  switch(action.type) {
    case 'CHANGE_COLORS' :
      return action.colors
    default:
      return state;
  }
}

export default colors;
