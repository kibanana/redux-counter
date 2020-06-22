// 리듀서는 액션의 type에 따라 변화를 일으키는 함수
// 리듀서 파일에는 최초 변화가 일어나기 전 지니고있어야 하는 초기상태가 정의되어야 한다.
// 리듀서 함수는 state, action을 파라미터로 가지는 함수다.
// 그리고 리듀서 함수 내부에서 switch문을 통해 action.type에 따라 상태에 따른 변화를 일으키면 된다.
// 절대 state를 직접 수정하지 말고, 기존 state 값에 덮어쓰는 새 상태객체를 만드는 방식을 이용해야 한다.

import * as types from '../actions/ActionTypes';

function counter(state = { color: 'black', number: 0}, action) {
  switch (action.type) {
    case types.INCREMENT: 
      return {
        ...state,
        number: state.number + 1,
      };
    case types.DECREMENT: 
      return {
        ...state,
        number: state.number - 1,
      };
    case types.SET_COLOR: 
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
}

export default counter;
