import React from 'react';
import Param from '@/components/normal/Param';
import {Route,Link,withRouter} from 'react-router-dom';
class RouterParam extends React.Component{
  constructor(props){
    super(props)
    this.state = {a:1};
  }




  ttt = () => {
    this.props.history.push({ pathname:'/Param/aaaaa' }) 
  }

  render(){

   

    return(
      <div>
        <Link to="/Param/zhangsan">Param</Link> | 
        js中跳转：this.props.history.push(【pathname:"/path/" + name】); 【】换成大括号
        <Route path='/Param/:name'  component={Param}></Route>
        <br/>
        <span onClick={this.ttt}> js执行 </span>
        <hr/>
    路由接收参数
      
      </div>
      
    )
  }
}
// withRouter 是一个高阶函数
export default withRouter(RouterParam);