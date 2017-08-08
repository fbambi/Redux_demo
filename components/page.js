import React, {Component} from 'react';
import {render} from 'react-dom';

import Button from './Button/index.js';
import Display from './Display/index.js';

class Page extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Display/>
        <Button/>
      </div>
    );
  }
}

export default Page;
