import React, {Component} from 'react';
import {connect} from 'react-redux';
let todos=[{text:'test',completed:false},{text:'nnn',completed:true}]

class _Button extends Component {
  constructor(props) {
    super(props);
    console.log('button constructor');
  }

  componentWillReceiveProps(props) {
    console.log('button willReceiveProps');
  }

  

  render() {
    return (
      <div>
        {this.props.todos.map(item => {
          return (
            <div>
            {item.text} 
            status:{item.completed?'finished':'unfinished'}
            </div>
            )
        })}
      </div>
    );
  }





}

let count = 0;

function mapStateToProps(_state) {
  let state = _state.button;
  console.log('button mapStateToProps')
  return {count: 1}
};

function mapDispatchToProps(dispatch) {
  console.log('button mapDispatchToProps')
  return {
    handleClick: () => {
      console.log('handleClick')
      dispatch({type: 'ADD'})
    }
  }
}

let Button = connect(mapStateToProps, mapDispatchToProps)(_Button);

export default Button;
