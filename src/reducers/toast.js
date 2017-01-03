function toast(state = [], action) {
  switch(action.type) {
    case 'DO_TOAST' :
      return action.toast
    default:
      return state;
  }
}

export default toast;
