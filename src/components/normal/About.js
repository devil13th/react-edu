import React from 'react';
import {Tag} from 'antd'
class About extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div><Tag color="#108ee9">About</Tag></div>
    )
  }
}

export default About;