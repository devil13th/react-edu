import React from 'react';
import {Switch,Route} from 'react-router-dom'
class BB extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <h2>组件B-B</h2>
      </div>
    )
  }
}

export default BB;