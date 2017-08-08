function reducer(state = {
  count:3,
  dispaly:true
}, action) {
  console.log('display reducer');
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
