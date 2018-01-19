import * as ActionTypes from '../actions/homeAction';

const initialState = {
  isLoading:false,
  beers:[],
  currentPage:1,
}

export const HomeReducer = (state=initialState,action) => {

  switch (action.type) {
    case ActionTypes.SEARCH_BEER_SUCCESS:
      return { 
          ...state,
          beers:action.beers,
          isLoading:false,
          currentPage:action.currentPage,
      }

    case ActionTypes.SEARCH_BEER_LOADING:
      return {
        ...state,
        isLoading:action.isLoading, 
      }

    default:
      return state;    

  }
};  
