import axios from 'axios';
import { predicateBy } from '../utils/common';

const URL =`http://starlord.hackerearth.com/movieslisting`;


export function getMovies() {
  const request = axios.get(URL);
      return function(dispatch) {
        axios.get(URL)
      .then((response) => {
        dispatch(getMovieSuccess(response.data))
      })
      .catch((err) => {
        dispatch(getMovieFailure(err))
      })
  }
};


function getMovieSuccess(response) {
  return {
    type: 'FETCH_MOVIES_SUCCESSFUL',
    payload: response
  }
}

function getMovieFailure(err) {
  return {
    type: 'FETCH_MOVIES_FAILRUE',
    payload: err
  }
}

export function searchMovie(searchText) {
  return (dispatch, getState) => {
    const {movies} = getState().movieReducer;
    console.log("Search");
    let updatedMovies = [];
    for(let i=0; i<movies.length; i++) {
      if(movies[i].movie_title.trim().toUpperCase() == searchText.trim().toUpperCase()) {
          updatedMovies = movies.slice(i, i+1);
      }
    }
    dispatch(getMovieSuccess(updatedMovies));
  }
}

export function sortByTitleYear(sortOrder, sortBy) {
  return (dispatch, getState) => {
    const {movies} = getState().movieReducer;
    let updatedMovies = movies;
    for(let i=0; i<4; i++){
      console.log("updatedMovies.title_year: ",typeof(updatedMovies[i].title_year));
    }
    updatedMovies.sort(predicateBy(sortBy));
    for(let i=0; i<4; i++){
      console.log("updatedMovies.title_year: ", typeof(updatedMovies[i].title_year));
    }
    dispatch(getMovieSuccess(updatedMovies));
  }
}
