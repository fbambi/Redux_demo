import React, {Component} from 'react';
import {connect} from 'react-redux';

class _Display extends Component {
  constructor(props) {
    console.log('display constructor')
    super(props);
  }

  componentWillReceiveProps(props){
    console.log('display willReceiveProps');
  }

  render() {
    console.log('dispaly render')
    return (
      <div>
        <span>count:</span>
        {this.props.value}
      </div>
    )
  }

}

function mapStateToProps(_state) {
  console.log('display mapStateToProps')
  let state = _state.button;
  return {value: state.count}
}

function mapDispatchToProps(state) {
  console.log('display mapDispatchToProps')
  return {}
}

const Display = connect(mapStateToProps,mapDispatchToProps)(_Display);

export default Display;
