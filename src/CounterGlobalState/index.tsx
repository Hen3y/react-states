import React, { FC } from 'react';

import { useCounterStore } from './store/index';

const Counter: FC = () => {
  const [state, setState] = useCounterStore();

  const incrementHandler = () => {
    setState({ ...state, counter: state.counter + 1 });
  };

  const decrementHandler = () => {
    setState({ ...state, counter: state.counter - 1 });
  };

  const toggleCounterHandler = () => {
    setState({ ...state, showCounter: !state.showCounter });
  };

  return (
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <h1>Global State Counter</h1>
      {state.showCounter && <p style={{ fontSize: '32px' }}>{state.counter}</p>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;

export const CounterDashboard: FC = () => {
  const [state] = useCounterStore();
  return (
    <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <h2>Another Component Using Global State</h2>
      <ul>
        {Object.entries(state).map((field) => (
          <li key={field[0]}>{`${field[0]}: ${field[1]}`}</li>
        ))}
      </ul>
    </div>
  );
};
