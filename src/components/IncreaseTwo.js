import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseByTwo } from '../redux/action/counterActions';

class IncreaseTwo extends Component {
  render() {
    return (
      <div><button onClick={e=>{
        this.props.dispatch(increaseByTwo());
      }}>
        +2
      </button></div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {action:bindActionCreators(increaseByTwo,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseTwo);