import { combineReducers } from 'redux';

import { HomeReducer } from './homeReducer';

const Reducer = combineReducers(
  {
    HomeReducer,
  }
);

export default Reducer;