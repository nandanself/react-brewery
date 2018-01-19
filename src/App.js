import React from 'react';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import store from './store';
import Css from "./App.css";

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
