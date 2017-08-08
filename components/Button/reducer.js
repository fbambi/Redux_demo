function reducer(state = {
  count:6
}, action) {
  console.log('button reducer')
  console.log(action.type);

  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 1
      }
      break;
    default:
      return state;
  }
}

export default reducer;
