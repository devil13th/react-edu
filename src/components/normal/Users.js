import React from 'react';
import {Tag} from 'antd'
class Users extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div><Tag color="#f50">Users</Tag></div>
    )
  }
}

export default Users;