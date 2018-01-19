import * as ActionTypes from '../actions/homeAction';

const initialState = {
  isLoading:false,
  beers:[]
}

export const HomeReducer = (state=initialState,action) => {

  switch (action.type) {
    case ActionTypes.SEARCH_BEER_SUCCESS:
      return { 
          ...state,
          beers:action.beers,
          isLoading:false,
      }

    case ActionTypes.SEARCH_BEER_LOADING:
      return {
        ...state,
        isLoading:action.isLoading
      }

    default:
      return state;    

  }
};  
