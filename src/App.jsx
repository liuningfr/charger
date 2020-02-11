import React from 'react';
import { Provider } from 'retalk';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import store from '@/store';
import Demo from '@/pages/Demo';

import './App.scss';

const { Header, Footer, Sider, Content } = Layout;
const { Item } = Menu;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Sider theme="light">
          <div className="logo">Logo</div>
          <Menu>
            <Item key="demo">
              <NavLink to="/demo">
                <Icon type="info-circle" />
                示例
              </NavLink>
            </Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route path="/demo">
                <Demo />
              </Route>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Provider>
  </BrowserRouter>
);

export default App;
