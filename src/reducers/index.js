// 리듀서는 액션의 type에 따라 변화를 일으키는 함수
// 리듀서 파일에는 최초 변화가 일어나기 전 지니고있어야 하는 초기상태가 정의되어야 한다.
// 리듀서 함수는 state, action을 파라미터로 가지는 함수다.
// 그리고 리듀서 함수 내부에서 switch문을 통해 action.type에 따라 상태에 따른 변화를 일으키면 된다.
// 절대 state를 직접 수정하지 말고, 기존 state 값에 덮어쓰는 새 상태객체를 만드는 방식을 이용해야 한다.

// 기존 리듀서의 작동 방식과 다르므로 서브 리듀서를 쓰지 않고 루트 리듀서 하나만 쓴다.
import * as types from '../actions/ActionTypes';

const initialState = {
  counters: [
    {
      color: 'black',
      number: 0,
    },
  ],
};

function counter (state = initialState, action) {
  const { counters } = state;
  switch (action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0,
          },
        ],
      };
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length -1),
      };
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1,
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number - 1,
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color,
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    default:
      return state;
  }
}

export default counter;
