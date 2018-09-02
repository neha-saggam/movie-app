import { connect } from 'react-redux';
import  actions from '../actions';
import { bindActionCreators } from 'redux';
import MovieList from '../components/Movie/List';

function mapStateToProps(state) {
  console.log("movies: ", state)
  return {
    movies: state.movieReducer.movies
  };
}

function mapDispatchToProps(dispatch) {
  console.log("getMovies: ", actions.movieActions);
  return bindActionCreators({
        getMovies: actions.movieActions.getMovies,
        searchMovie: actions.movieActions.searchMovie,
        sortByTitleYear: actions.movieActions.sortByTitleYear
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
