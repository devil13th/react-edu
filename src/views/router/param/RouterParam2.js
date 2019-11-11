import React from 'react';
import Param2 from '@/components/normal/Param2';
import {Route,Link} from 'react-router-dom';
class RouterParam extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <Link to="/query?name=lisi&age=5">param</Link><br/>
         js :this.props.history.push(【pathname:"/query?name=" + row.tenantId】) 【】换成大括号
        <Route path='/query' component={Param2}/>
        <hr/>
    路由接收参数
      
      </div>
      
    )
  }
}

export default RouterParam;