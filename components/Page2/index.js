import React,{Component} from 'react';
import {render} from 'react-dom';

class Page2 extends Component{

  handleClick(){
    const {dispatch} = this.props;
    let action = {
      type:'add',
      count:2
    }
    dispatch(action);
  }

  render(){
    console.log(this.context);

    return(
      <div>
          <button onClick={this.handleClick}>add</button>
      </div>
    );

  }
}


export default Page2;
