import React from 'react';
import { Provider } from 'retalk';
import { Layout } from 'antd';

import store from '@/store';
import Demo from '@/pages/Demo';

import './App.scss';

const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <Provider store={store}>
    <Layout>
      <Sider>Sider</Sider>
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
