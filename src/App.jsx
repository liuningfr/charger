import React from 'react';
import logo from './logo.svg';
import './App.css';

import Component from './Component';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code> src/App.js </code>
        and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
    <Component />
  </div>
);

export default App;
