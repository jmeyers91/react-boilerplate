import { uniqueId } from 'lodash';
import { createAction, handleActions } from 'redux-actions';
import removeById from 'util/removeById';
import replaceById from 'util/replaceById';

export const createTask = createAction('CREATE_TASK', (text) => text);
export const removeTask = createAction('REMOVE_TASK', (id) => id);
export const toggleTask = createAction('TOGGLE_TASK', (id) => id);

export default handleActions({
  REMOVE_TASK: (tasks, {payload : id}) => removeById(tasks, id),
  CREATE_TASK: (tasks, {payload : text}) => [
      {
        text,
        id: uniqueId('task'),
        complete: false
      },
      ...tasks
  ],
  TOGGLE_TASK: (tasks, {payload : id}) => replaceById(tasks, id, (task) => ({
    ...task,
    complete: !task.complete
  })),
}, []);
