import React,{Component} from 'react';
import {render} from 'react-dom';

import Page1 from './Page1/index.js';
import Page2 from './Page2/index.js';

class Page extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <Page1 />
        <Page2 />
      </div>
    );
  }
}



export default Page;
