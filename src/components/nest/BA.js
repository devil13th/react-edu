import React from 'react';
import {Switch,Route} from 'react-router-dom'
class BA extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <h2>组件B-A</h2>
      </div>
    )
  }
}

export default BA;