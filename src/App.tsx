import React, { FC } from 'react';
import { Provider } from 'react-redux';

import CounterRedux from './CounterRedux';
import counterReduxStore from './CounterRedux/store';

import CounterReduxToolkit from './CounterReduxToolkit';
import counterReduxToolkitStore from './CounterReduxToolkit/store';

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
    </div>
  );
};

export default App;
