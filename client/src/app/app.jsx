import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/index.scss';
import MainApp from './MainApp';
//import Hello from './Hello.jsx';
import configureStore from './configureStore';

const store = configureStore();
render(
  <Provider store={store}>
    <div>
      <MainApp />
    </div>
  </Provider>,
  document.getElementById('root')
);
