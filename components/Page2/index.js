import React,{Component} from 'react';
import {render} from 'react-dom';

import PropTypes from 'prop-types'

import {connect} from 'react-redux';

class _Page2 extends Component{

  render(){
    const {handleClick} = this.props;
    return(
      <div>
          <button onClick={handleClick}>add</button>
      </div>
    );

  }
}

_Page2.propTypes = {
  handleClick:PropTypes.func.isRequired
}


function mapDiapatchToProps(dispatch){
  return {
    handleClick:()=>dispatch({
      type:'add',
      count:1
    })
  }
}

function mapStateToProps(state){
  return{

  }

}


var Page2 = connect(mapStateToProps,mapDiapatchToProps)(_Page2);




export default Page2;
