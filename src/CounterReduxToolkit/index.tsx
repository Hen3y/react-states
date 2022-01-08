import React, { FC, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CounterState } from '../types';
import { counterActions } from './store';

const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector<CounterState, number>((state) => state.counter);
  const isCounterShown = useSelector<CounterState, boolean>((state) => state.showCounter);
  const inputRef = useRef<HTMLInputElement>(null);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // 可以直接调用从store导出的actions
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increaseByHandler = () => {
    dispatch(counterActions.increaseByAmount(Number(inputRef.current?.value)));
  };

  return (
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <h1>Redux Counter</h1>
      {isCounterShown && <p style={{ fontSize: '32px' }}>{counter}</p>}
      <div>
        <button onClick={incrementHandler}>+1</button>
        <button onClick={decrementHandler}>-1</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <br />
        <label>
          +
          <input type='text' ref={inputRef} />
        </label>
        <button onClick={increaseByHandler}>Ready Go!</button>
      </div>
    </div>
  );
};

export default Counter;
