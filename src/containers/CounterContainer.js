// 컨테이너 컴포넌트를 store에 연결시켜주려면 react-redux의 connect 함수를 사용해야한다.
// 이 함수의 파라미터로 컴포넌트에 연결시킬 상태, 액션함수들을 전달해주면 컴포넌트를 리덕스 스토어에 연결시키는 또 다른 함수를 반환한다.
// 이 과정에서 리턴된 함수 안에 프레젠테이셔널 컴포넌트를 파라미터로 전달해주면 리덕스 스토어에 연결된 컴포넌트가 새로 만들어진다.
// 컴포넌트에 연결시킬 상태, 액션함수를 정의할 때에는 각각 함수를 만들어주어야 하는데,
// 상태를 연결시킬 때에는 state, 액션함수를 연결시킬 때에는 dispatch를 파라미터로 전달받는 함수를 만들어서 객체를 반환하면 이를 props로 사용할 수 있게 된다.

import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store 내의 state 값을 props에 연결한다.
// prop값: state값
const mapStateToProps = (state) => ({
  color: state.colorData.color,
  number: state.numberData.number,
});

// 액션 생성자를 사용해서 액션을 생성하고 해당 액션을 dispatch하는 함수를 만들고 이를 props에 연결한다.
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  }
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 한다.
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;
