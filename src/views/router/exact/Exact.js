import React from "react";
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import Home from '@/components/normal/Home';
import About from '@/components/normal/About';
import Users from '@/components/normal/Users';

export default function ReactRouterTest() {
  return (
    <div>
        <Link to="/">Home</Link> | 
        <Link to="/Home">About</Link> | 
        <Link to="/Home/Users">Users</Link> 
<hr/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/Home' exact component={About}></Route>
          <Route path='/Home/Users' exact component={Users}></Route>
        </Switch>

        <br/>
        exact属性使用<br/>

        精确匹配，只有路由的path属性精确匹配到url才会被渲染
        

    </div>
  );
}
