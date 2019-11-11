import React from 'react';
import Param from '@/components/normal/Param';
import {Route,Link} from 'react-router-dom';
class RouterParam extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <Link to="/Param/zhangsan">Param</Link> | 
        js中跳转：this.props.history.push(【pathname:"/path/" + name】); 【】换成大括号
        <Route path='/Param/:name'  component={Param}></Route>

        <hr/>
    路由接收参数
      
      </div>
      
    )
  }
}

export default RouterParam;