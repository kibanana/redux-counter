import React, { Component } from 'react';
import Counter from './Counter';
import CounterContainer from '../containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <Counter />
        Counter
      </div>
    );
  }
}

export default App;
