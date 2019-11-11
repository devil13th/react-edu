import React from 'react';
import Home from '@/components/normal/Home';
import About from '@/components/normal/About';
import Users from '@/components/normal/Users';
import {Route,Link,Redirect,Switch} from 'react-router-dom';
class RedirectRouter extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
  }
  render(){
    return(
      <div>
        <Link to="/">redirect</Link> | 
        <Link to="/Home">Home</Link> | 
        <Switch> 
          <Route path='/Home'  component={Home}></Route>
          <Route path='/Users'  component={Users}></Route>
          <Redirect to="/xxx" from='/'  /> 
        </Switch>
        <hr/>
        Redirect:将匹配到的直接重定向到另外一个地址-url会发生变化
      </div>
      
    )
  }
}

export default RedirectRouter;