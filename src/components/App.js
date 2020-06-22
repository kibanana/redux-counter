import React, { Component } from 'react';
import Counter from './Counter';
import CounterListContainer from '../containers/CounterListContainer';
import Buttons from '../components/Buttons';
import * as actions from '../actions';
import { getRandomColor } from '../utils';
import { connect } from 'react-redux';

// Buttons의 경우엔 따로 컨테이너 컴포넌트를 만들지 않고 App 컴포넌트를 redux에 연결시키고 액션함수들을 연결한다.

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons 
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer />
      </div>
    );
  }
}

const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (idx) => dispatch(actions.remove(idx)),
});

// mapStateToProps는 null
export default connect(null, mapToDispatch)(App);
