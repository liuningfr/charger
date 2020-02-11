import React from 'react';
import { withStore } from 'retalk';
import { Button } from 'antd';

const Counter = ({ count, increment, decrement, incrementAsync }) => (
  <>
    <p>{count}</p>
    <Button onClick={increment}>+</Button>
    <Button onClick={decrement}>-</Button>
    <Button onClick={incrementAsync}>+ Async{incrementAsync.loading && '...'}</Button>
  </>
);

export default withStore('counter')(Counter);
