// 从redux中引入createStore
import { createStore } from 'redux';
// 引入action的枚举类型和counter的state和action的定义类型
import { ActionType, CounterAction, CounterState } from '../../types';

// 定义初始化state
const initialState: CounterState = { counter: 0, showCounter: true };

// 定义reducer用于处理Action返回state
const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case ActionType.increment:
      // 原生的react-redux没有引入类似于immer或immutable库，所以需要在新的state里加入解构的旧的state
      return { ...state, counter: state.counter + 1 };

    case ActionType.decrement:
      return { ...state, counter: state.counter - 1 };

    case ActionType.toggle:
      return { ...state, showCounter: !state.showCounter };

    default:
      return state;
  }
};

// 使用createStore创建一个store
// createStore接受三个参数：reducer函数，preloadedState用于初始化state，enhancer用于向store添加第三方中间件
const store = createStore(counterReducer);

export default store;
