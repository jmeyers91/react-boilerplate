import React, { Component } from 'react';
import style from './style.css';
import { connect } from 'react-redux';
import { createTask, removeTask, toggleTask } from 'store/actions/tasks';

@connect(
  ({tasks}) => ({tasks}),
  (dispatch) => ({
    onCreateTask: (text) => dispatch(createTask(text)),
    onRemoveTask: (id) => dispatch(removeTask(id)),
    onToggleTask: (id) => dispatch(toggleTask(id)),
  })
)
export default class TodoApp extends Component {
  state = {taskText: ''};

  handleTaskTextChange = (event) => this.setState({taskText: event.target.value});
  handleCreateTask = (event) => {
    event.preventDefault();
    this.props.onCreateTask(this.state.taskText);
    this.setState({taskText: ''});
  };

  render() {
    const {tasks, onRemoveTask, onToggleTask} = this.props;
    const {taskText} = this.state;

    return (
      <div className={style.root}>
        <form onSubmit={this.handleCreateTask}>
          <input value={taskText} onChange={this.handleTaskTextChange}/>
          <button type="submit">Create</button>
        </form>
        <ul>
          {tasks.map((task) =>
            <li key={task.id}>
              <span
                onClick={onToggleTask.bind(null, task.id)}
                style={{textDecoration: task.complete ? 'line-through' : null}}
              >
                {task.text}
              </span>
              <button onClick={onRemoveTask.bind(null, task.id)}>Remove</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
