// 从toolkit里引入createSlice, configureStore两个关键函数
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

import { CounterState } from '../../types';

const initialState: CounterState = { counter: 0, showCounter: true };

// createSlice为某一个类型的action创建了一个切片，将这个action相关的信息都归集到了一起，更便于维护
const counterSlice = createSlice({
  // slice的名称
  name: 'counter',
  // state的初始值
  initialState,
  // 一个包含了action的对象，每一个key都会生成一个actions（相当于原生redux的Switch Case写法）
  reducers: {
    // toolkit内部调用了[Immer](https://immerjs.github.io/immer/#how-immer-works)包，我们可以直接对state对象做修改，不用解构旧的state
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseByAmount(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 调用切片对象的actions属性可以获得所有在reducers里定义的actions
export const counterActions = counterSlice.actions;

// 调用configureStore创建一个store，这个函数是对Redux的createStore函数的一个封装，它接受一个对象，对象里包括：
// reducer：接收单个reducer函数或者包含若干reducer函数的对象
// middleware？：接收Redux中间件函数数组，默认使用了react-thunk
// devTools？：决定是否开启对Redux DevTools浏览器插件的支持
// preloadedState？：传给Redux的createStore函数中同名
// enhancers？：接收Redux store enhancer数组
const store = configureStore({ reducer: counterSlice.reducer });
export default store;
