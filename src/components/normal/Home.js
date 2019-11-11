import React from 'react';
import {Tag} from 'antd'
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <Tag color="#2db7f5">HOME</Tag>
      </div>
    )
  }
}

export default Home;