// 액션을 만드는 함수
// 액션생성자

// 액션이 특정 카운터를 조작해야하므로 index 값이 액션 객체에 포함되어야 한다.

import * as types from './ActionTypes';

export const create = (color) => ({
  type: types.CREATE,
  color,
});

export const remove = () => ({
  type: types.REMOVE,
});

export const increment = (index) => ({
  type: types.INCREMENT,
  index,
});

export const decrement = (index) => ({
  type: types.DECREMENT,
  index,
});

export const setColor = ({ index, color }) => ({
  type: types.SET_COLOR,
  index,
  color,
});
