import React from "react";
import {Table} from 'react-bootstrap';

export default function MovieTable(props) {
  const { movies, sortByTitleYear } = props;
  const movieItems = movies.map((movie, index) =>
  <tr key={index}>
  <td> {index+1}</td>
  <td> {movie.movie_title}</td>
  <td> {movie.director_name}</td>
  <td> {movie.actor_1_name} , {movie.actor_2_name}</td>
  <td> {movie.genres}</td>
  <td> {movie.title_year} </td>
  <td> {movie.content_rating}</td>
  </tr>
  );

return (
  <div style={{marginLeft: '10%', marginRight: '10%'}}>
  <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Movie</th>
      <th>Director</th>
      <th>Actors</th>
      <th>Genres</th>
      <th><a onClick={() => sortByTitleYear('title_year')}>Year <span className="caret"></span></a></th>
      <th>Rating</th>
    </tr>
  </thead>
  <tbody>
    {movieItems}
  </tbody>
</Table>
</div>
);
}
