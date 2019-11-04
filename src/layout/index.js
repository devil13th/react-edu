import React, { ReactDOM } from 'react'
import { Layout, Menu, Icon ,Affix} from 'antd';
import '../assets/main.css';
const { Header, Sider, Content, Footer } = Layout;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible 
          collapsed={this.state.collapsed}
          onCollapse={this.toggle}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span className="nav-text">nav 5</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="appstore-o" />
              <span className="nav-text">nav 6</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="team" />
              <span className="nav-text">nav 7</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="shop" />
              <span className="nav-text">nav 8</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={this.state.collapsed ? { marginLeft: 80 } : { marginLeft: 200 }}>
          <Affix offsetTop={this.state.top}>
            <Header style={{ background: '#fff', padding: 0 }} id="components-layout-demo-custom-trigger">

              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
          </Affix>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              ...
          <br />
              Really
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              long
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              ...
          <br />
              content
        </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;