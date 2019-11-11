import React from "react";
import { Alert, Breadcrumb } from 'antd';
import {
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, About, Users } from '../../components/normal'
import Thd from '@/components/thd/Thd'
export default function RouterTest() {

  return (
    <div>
      <h1>RouterIndex</h1>

      <Thd msg="react-router"></Thd>
      <Alert message="Router教程,更详细的Router代码请打开src/index.js,将其中的注释去掉即可查看示例代码" showIcon type="info" ></Alert>
      <br /><br />
      导航链接：
      <Breadcrumb style={{ 'margin': 24 }}>
        <Breadcrumb.Item><Link to="/router/home">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/router/about">About</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/router/users">Users</Link></Breadcrumb.Item>
      </Breadcrumb>

      <div style={{ 'border': '8px solid #ddd', 'padding': '8px' }}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path='/router/home' component={Home} />
          <Route path='/router/about' component={About} />
          <Route path='/router/users' component={Users} />
          {/* 默认页 */}
          <Redirect form="/router" to="/router/home" />
        </Switch>
      </div>

    </div>

  );
}
