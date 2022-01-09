import React, { FC } from 'react';
// 使用React-Redux和Redux-Toolkit都需要用到Provider组件
import { Provider } from 'react-redux';

import CounterRedux from './CounterRedux';
import counterReduxStore from './CounterRedux/store';

import CounterReduxToolkit from './CounterReduxToolkit';
import counterReduxToolkitStore from './CounterReduxToolkit/store';

import CounterContext from './CounterContext';
// context的provider其实已经封装在了store里
import CounterContextStore from './CounterContext/store';

import CounterGlobalState, { CounterDashboard } from './CounterGlobalState';

const App: FC = () => {
  return (
    <div className='App'>
      <Provider store={counterReduxStore}>
        <CounterRedux />
      </Provider>
      <br />
      <Provider store={counterReduxToolkitStore}>
        <CounterReduxToolkit />
      </Provider>
      <br />
      <CounterContextStore>
        <CounterContext />
      </CounterContextStore>
      <br />
      <CounterGlobalState />
      <CounterDashboard />
    </div>
  );
};

export default App;
