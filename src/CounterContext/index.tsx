import React, { FC, useContext } from 'react';

import { ActionType } from '../types';
import { CounterContext } from './store';

const Counter: FC = () => {
  const { store, dispatch } = useContext(CounterContext);
  const { counter, showCounter } = store;

  const incrementHandler = () => {
    dispatch({ type: ActionType.increment, payload: null });
  };

  const decrementHandler = () => {
    dispatch({ type: ActionType.decrement });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: ActionType.toggle });
  };

  return (
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <h1>useContext+useReducer Counter</h1>
      {showCounter && <p style={{ fontSize: '32px' }}>{counter}</p>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;
