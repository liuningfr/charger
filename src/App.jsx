import React from 'react';
import { Provider } from 'retalk';

import store from '@/store';
import Counter from '@/pages/Demo';

const App = () => (
  <Provider store={store}>
    <>
      <Counter />
    </>
  </Provider>
);

export default App;
