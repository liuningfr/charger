import React from 'react';
import { Provider } from 'retalk';
import { Layout, Menu, Icon } from 'antd';

import store from '@/store';
import Demo from '@/pages/Demo';

import './App.scss';

const { Header, Footer, Sider, Content } = Layout;
const { Item } = Menu;

const App = () => (
  <Provider store={store}>
    <Layout>
      <Sider theme="light">
        <div className="logo">Logo</div>
        <Menu>
          <Item key="demo">
            <Icon type="info-circle" />
            示例
          </Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Demo />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Provider>
);

export default App;
