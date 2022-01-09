import React, { createContext, Dispatch, FC, useReducer } from 'react';
// 引入immutable对reducer进行改造
import { setIn } from 'immutable';
import { CounterState, CounterAction, ActionType } from '../../types';

type Context = {
  store: CounterState;
  dispatch: Dispatch<CounterAction>;
};

// 调用createContext创建一个context，用泛型定义context里包含的内容：一个store和一个dispatch
export const CounterContext = createContext<Context>({} as Context);

// 这里可以使用与react-redux里完全一样的reducer
// 模仿redux-toolkit的设计，引入immutable对actions返回的state处理一下
const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case ActionType.increment:
      return setIn(state, ['counter'], state.counter + 1);

    case ActionType.decrement:
      return setIn(state, ['counter'], state.counter - 1);

    case ActionType.toggle:
      return setIn(state, ['showCounter'], !state.showCounter);

    default:
      return state;
  }
};

// 定义初始化state
const initialState: CounterState = { counter: 0, showCounter: true };

// 引入useReducer将context封装一下
const Provider: FC = (props) => {
  // 调用useReducer hook导出store和dispatch
  const [store, dispatch] = useReducer(counterReducer, initialState);
  // 将store和dispatch传入context.provider，这样被该provider包裹的组件都可以用到store和dispatch
  return <CounterContext.Provider value={{ store, dispatch }}>{props.children}</CounterContext.Provider>;
};

export default Provider;
