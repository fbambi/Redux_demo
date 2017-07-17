import React, { Component } from 'react';
import { render } from 'react-dom';
import Page from './page.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './reducer.js';

import Immutable,{fromJS,toJS} from 'immutable';

class App extends Component {
    render() {
      const {dispatch} = this.props;
        return (
            <div>
                
                <Page />
            </div>
        )
    }
}

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

let obj={
  a:1,
  b:{
    1:1,
    2:2
  },
  d:[{
    a:1
  },{
    b:1,
  },{
    c:[{c:1}]
  }]
};


let imObj = fromJS(obj);

console.log(imObj);
debugger;
let imObj2=imObj.setIn(['c',"1",'d',1],'kkk');

let value = imObj2.setIn(['d',2,'c',0,'c'],2);

console.log(value.toJS());


console.log(imObj.toJS());
console.log(imObj2.toJS());





let store = createStore(AppReducer);
render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('app')
)
