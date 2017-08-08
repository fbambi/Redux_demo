import {combineReducers} from 'redux';

import display from './Display/reducer.js';
import button from './Button/reducer.js'

console.log('AppReducer')

const AppReducer = combineReducers({button:button,display:display,});

export default AppReducer;
