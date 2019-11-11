import React from 'react';
import Home from '@/components/normal/Home';
import About from '@/components/normal/About';
import Users from '@/components/normal/Users';
import {Route,Link} from 'react-router-dom';
class BasicRouter extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <Link to="/HOME">Home</Link> | 
        <Link to="/HOME/About">About</Link> | 
        <Link to="/HOME/About/Users">Users</Link> | 
        <Route path='/'  component={Home}></Route>
        <Route path='/HOME'  component={Home}></Route>
        <Route path='/HOME/About'  component={About}></Route>
        <Route path='/HOME/About/Users'  component={Users}></Route>

        <hr/>

        可以点击了链接后会根据路径一层一层渲染，只要匹配到路由path就会被渲染<br/>
        解决方案:<br/>
        1.添加exact属性（路由精确匹配）
      </div>
    )
  }
}

export default BasicRouter;