import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
const { Sider } = Layout;
const { SubMenu } = Menu;
class MenuSider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div>
        <div className="logo" />

        <Menu theme="dark" mode="inline">
        <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="environment" />
                <span>Router</span>
              </span>
            }
          >
            <Menu.Item key="3"><Link to="/router/home">Home</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/router/about">About</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/router/users">Users</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Basic</span>
              </span>
            }
          >
            <Menu.Item key="6"><Link to="/router/basic/children/parent">子组件</Link></Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>


     
      </div>

    )
  }
}

export default MenuSider;