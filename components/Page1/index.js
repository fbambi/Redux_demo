import React,{Component} from 'react';
import {render} from 'react-dom';

import {connect} from 'react-redux';

class _Page1 extends Component{

  render(){
    let value = this.props.count;
    return (
      <div>
        <span>count:</span>
        {value}
      </div>
    )
  }

}

function mapStateToProps(state){
  var _state = state.counterReducer;
  return {
    count:_state.count
  }
}


const Page1 = connect(mapStateToProps)(_Page1);



export default Page1;
