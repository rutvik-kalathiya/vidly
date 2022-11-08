import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';

class moviesClassComponent extends Component {
  state = {
            movies: getMovies()
          }
  
  render() {
    const handleDelete = (movie) => {
      this.setState({movies: this.state.movies.filter((m) => m._id !== movie._id)});
    }

    if (this.state.movies.length === 0) return <React.Fragment><h2>Movies using class Components</h2><p>There are no movies in database</p></React.Fragment>

    return (
      <React.Fragment>
      <h2>Movies using class Components</h2>
      <p> Showing {this.state.movies.length} movies in the database.</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
    )
  }
}
export default moviesClassComponent;
