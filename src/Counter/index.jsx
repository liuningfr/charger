import React from 'react';
import { withStore } from 'retalk';

const Counter = ({ count, increment, decrement, incrementAsync }) => (
  <>
    <p>{count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={incrementAsync}>+ Async{incrementAsync.loading && '...'}</button>
  </>
);

export default withStore('counter')(Counter);
