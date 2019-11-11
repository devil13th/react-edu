import React from 'react'
import { Layout, Icon, Affix } from 'antd';
import '../assets/main.css';
import { Switch, Route,Redirect} from 'react-router-dom'
import MenuSider from './MenuSider'
import RouterIndex from '../views/router/RouterIndex'
const { Header, Content, Footer ,Sider} = Layout;

class IndexLayout extends React.Component {
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
          <MenuSider></MenuSider>
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
            <Switch>
              <Route path="/router"  component={RouterIndex} />
              <Redirect form="/" to="/router"/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default IndexLayout;