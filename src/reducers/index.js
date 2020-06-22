// 리듀서는 액션의 type에 따라 변화를 일으키는 함수
// 리듀서 파일에는 최초 변화가 일어나기 전 지니고있어야 하는 초기상태가 정의되어야 한다.
// 리듀서 함수는 state, action을 파라미터로 가지는 함수다.
// 그리고 리듀서 함수 내부에서 switch문을 통해 action.type에 따라 상태에 따른 변화를 일으키면 된다.
// 절대 state를 직접 수정하지 말고, 기존 state 값에 덮어쓰는 새 상태객체를 만드는 방식을 이용해야 한다.
import number from './number';
import color from './color';
import { combineReducers } from 'redux';

export default combineReducers({
  numberData: number,
  colorData: color,
});

// 서브 리듀서들을 하나로 합치면 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어진다.
// }
//   numberData: {
//     number: 0
//   },
//   colorData: {
//     color: 'black'
//   }
// }