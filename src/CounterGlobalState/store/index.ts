import { useState, useEffect } from 'react';
import { CounterState } from '../../types';

const GLOBAL_STATES: Record<string, any> = {};
const GLOBAL_STATES_DISPATCHERS: Record<string, any[]> = {};

// GlobalState实际上是一个自定义的hook
// 将一个state的value和setValue分别以同一个key存在两个类Map的对象里，再将value和setValue返回出去以便于组件的调用
// 在组件销毁时，相应的setValue也会被销毁
const useGlobalState = <T>(key: string, initState: T): [T, (value: T) => void] => {
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (!GLOBAL_STATES[key]) {
      GLOBAL_STATES[key] = initState;
      GLOBAL_STATES_DISPATCHERS[key] = [];
    } else {
      setState(GLOBAL_STATES[key]);
    }
    GLOBAL_STATES_DISPATCHERS[key].push(setState);
    return () => {
      GLOBAL_STATES_DISPATCHERS[key] = GLOBAL_STATES_DISPATCHERS[key].filter((item) => item !== setState);
    };
  }, []);

  const setStates = (newState: T) => {
    GLOBAL_STATES_DISPATCHERS[key].forEach((dispatch) => {
      dispatch(newState);
    });
    GLOBAL_STATES[key] = newState;
  };

  return [state, setStates];
};

// 对于某一类state，需要先在一处定义一个key和初始值
export const useCounterStore = () => useGlobalState<CounterState>('counter', { counter: 0, showCounter: true });
