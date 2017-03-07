import { createAction, handleActions } from 'redux-actions';

export const increment = createAction('INCREMENT', (amount=1) => amount);
export const decrement = createAction('DECREMENT', (amount=1) => amount);

export default handleActions({
  INCREMENT: (count, {payload : amount}) => count + amount,
  DECREMENT: (count, {payload : amount}) => count - amount,
}, 0);
