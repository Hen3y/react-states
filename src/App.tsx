import React, { FC } from 'react';
import { Provider } from 'react-redux';

import CounterRedux from './CounterRedux'
import counterReduxStore from './CounterRedux/store'

const App: FC = () => {
  return (
    <div className="App">
      <Provider store={counterReduxStore}>
        <CounterRedux/>
      </Provider>
      
    </div>
  );
}

export default App;
