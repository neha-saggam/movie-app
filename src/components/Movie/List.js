import React from "react";
import MovieTable from './Table';
import {ControlLabel, FormControl, Row, Grid, Col} from 'react-bootstrap';

export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [ ],
      mode: "",
      errors: {},
      searchText: "",
      sortOrder: "ASC"
    }
    this.handleSearhTextChange = this.handleSearhTextChange.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.sortByTitleYear = this.sortByTitleYear.bind(this);
  }

  componentDidMount() {
    console.log("this.props: ", this.props);
    this.props.getMovies();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
    this.setState({movies: nextProps.movies})
  }

  handleSearhTextChange(e) {
    console.log(e.target.value);
    this.setState({searchText: e.target.value});
    if(e.target.value.length === 0) {
      this.props.getMovies();
    }
  }

  searchMovie(event) {
    if(event.key == 'Enter') {
      this.props.searchMovie(this.state.searchText);
    }
  }

  sortByTitleYear(sortBy) {
    if(this.state.sortOrder === 'ASC') {
      this.setState({sortOrder: 'DESC'});
      this.props.sortByTitleYear(this.state.sortOrder, sortBy);
    }
    else {
      this.props.sortByTitleYear(this.state.sortOrder, sortBy);
      this.setState({sortOrder: 'ASC'});
    }
  }

render() {
  console.log("errors: ", this.state.errors);
  return (
    <div>
    <Grid>
    <Row className="show-grid">
      <Col  xsOffset={6} xs={6} md={3}>
      <FormControl componentClass="select" placeholder="select">
      <option value="select">select</option>
      <option value="other">Language</option>
      <option value="other">Country</option>
        </FormControl>
      </Col>
      <Col xs={6} md={3}>
      <FormControl
        type="text"
        value={this.state.value}
        placeholder="Enter text"
        onChange={this.handleSearhTextChange}
        onKeyPress={this.searchMovie}
      />
      </Col>
    </Row>
    </Grid>
      <MovieTable movies={this.state.movies} sortByTitleYear={this.sortByTitleYear}></MovieTable>
  </div>
  );
}
}
