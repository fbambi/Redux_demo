

function counter(state={count:0},action){
  switch (action.type){
    case 'add':
      return {
        count:state.count+action.count
      }
      break;
    default:
      return state;
  }
}

export default counter;
