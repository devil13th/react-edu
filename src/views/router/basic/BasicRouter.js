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
        <Link to="/Home">Home</Link> | 
        <Link to="/About">About</Link> | 
        <Link to="/Users">Users</Link> | 
        <Route path='/'  component={Home}></Route>
        <Route path='/Home'  component={Home}></Route>
        <Route path='/About'  component={About}></Route>
        <Route path='/Users'  component={Users}></Route>

        <hr/>
      &lt;Router&gt;是根据url匹配其path属性，匹配到后将组件渲染
      
      </div>
      
    )
  }
}

export default BasicRouter;