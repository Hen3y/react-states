import React, { FC } from 'react';
// 从react-redux引入两个hooks
import { useSelector, useDispatch } from 'react-redux';

import { ActionType, CounterState } from '../types';

const Counter: FC = () => {
  // useDispatch用于导出dispatch方法
  const dispatch = useDispatch();

  // useSelector接收一个selector函数，用于从state对象里导出想要使用的state；可选传入第二个参数比较函数equalityFn，用于自定义比较state
  // 当一个action被dispatch函数发送出去后，useSelector会比较selector前后两次state的差异，如果不同的话就会强制re-render
  // 默认采用 strict `===` reference equality 比较，如果只需要做浅比较可以从react-redux引入`shallowEqual`
  const counter = useSelector<CounterState, number>((state) => state.counter);
  const isCounterShown = useSelector<CounterState, boolean>((state) => state.showCounter);

  const incrementHandler = () => {
    // 一般dispatch出去的action包含两个部分：
    // type：为reducer里定义的可以接受的action type；可以将action type单独提取为enum类
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
      <h1>React Redux Counter</h1>
      {isCounterShown && <p style={{ fontSize: '32px' }}>{counter}</p>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;
