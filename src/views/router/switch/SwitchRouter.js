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
          <Route path='/'  component={Home}></Route>
          <Route path='/Home'  component={About}></Route>
          <Route path='/Home/Users'  component={Users}></Route>
        </Switch>

        <br/>
        Switch下的路由只会有一个匹配到并进行渲染<br/>
        需要注意的一点是route匹配url的开头，而不是整个url。<br/>
        因此&lt;route path="/"&gt;始终与url匹配。(本例就是这个原因,点击哪个链接页面都没有变化)<br/>
        因此，我们通常将这个&lt;route&gt;放在&lt;switch&gt;的最后
        <br/><br/>
        解决方案：<br/>
        1.调整&lt;route&gt;的顺序<br/>
        2.使用exact精确匹配<br/>
        

    </div>
  );
}
