// 액션을 만드는 함수
// 액션생성자

import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color,
});
