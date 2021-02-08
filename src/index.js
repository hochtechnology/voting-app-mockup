import React from 'react';
import ReactDOM from 'react-dom';
import getAppstore from "./components/redux/store/store";
import { Provider } from "react-redux";
import App from './App';

const store=getAppstore();

// MAIN FILE FOR PROJECT

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
 ,
  document.getElementById('root')
);

