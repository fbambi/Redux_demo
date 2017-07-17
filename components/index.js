import React, { Component } from 'react';
import { render } from 'react-dom';
import Page from './page.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppReducer from './reducer.js';


class App extends Component {
    render() {
      const {dispatch} = this.props;
      console.log(dispatch);
        return (
            <div>
                <h1>Hello</h1>
                <Page />
            </div>
        )
    }
}

console.log(AppReducer);

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


var store = createStore(counter);
render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('app')
)
