import React, { Component } from 'react';
import style from './style.css';
import TodoApp from 'components/TodoApp';
import CounterApp from 'components/CounterApp';

export default class Application extends Component {
  render() {
    return (
      <div className={style.root}>
        <TodoApp/>
        <CounterApp/>
      </div>
    );
  }
}
