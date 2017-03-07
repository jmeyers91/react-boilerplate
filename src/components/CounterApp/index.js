import React, { Component } from 'react';
import style from './style.css';
import { connect } from 'react-redux';
import { increment, decrement } from 'store/actions/count';

@connect(
  ({count}) => ({count}),
  (dispatch) => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
  })
)
export default class CounterApp extends Component {
  render() {
    const {count, onIncrement, onDecrement} = this.props;

    return (
      <div className={style.root}>
        <button onClick={onDecrement}>-</button>{count}<button onClick={onIncrement}>+</button>
      </div>
    );
  }
}
