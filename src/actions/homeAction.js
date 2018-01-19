import Axios from 'axios';
import { beersList } from "../utils/json-parsing/beer-json";

const BASE_URL = "http://127.0.0.1:8888/?url=";

export const SEARCH_BEER_SUCCESS = "SEARCH_BEER_SUCCESS";
export const SEARCH_BEER_LOADING = "SEARCH_BEER_LOADING";


export const searchBeer = (query) => {
  return (dispatch) => {
    dispatch(searchBeerLoading());
    let url = `${BASE_URL}${query}`;
    return Axios.get(url)
      .then(response => {
        dispatch(searchBeerSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
}

export const searchBeerLoading = () => {
  return {
    type: SEARCH_BEER_LOADING,
    isLoading:true,
  };
}

export const searchBeerSuccess = (response) => {
  return {
    type: SEARCH_BEER_SUCCESS,
    beers: (response.data !== undefined) ? beersList(response.data) : []
  };
}


