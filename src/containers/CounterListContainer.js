import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (idx) => dispatch(actions.increment(idx)),
  onDecrement: (idx) => dispatch(actions.decrement(idx)),
  onSetColor: (index) => {
    const color = getRandomColor();
    dispatch( actions.setColor({ index, color })); // 다른 것들은 index를 idx라고 표현해도 괜찮은데, onSetColor만 idx일 때 오류가 난다
  },
});

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterList);

export default CounterListContainer;
