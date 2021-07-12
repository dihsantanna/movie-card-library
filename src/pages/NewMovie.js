import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({
      loading: true,
    }, () => this.createMovie(newMovie));
  }

  async createMovie(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      loading: false,
      shouldRedirect: true,
    });
  }

  render() {
    const { loading, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="../../movie-card-library/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="new-movie">
        <MovieForm title="Adicione um Novo Filme:" onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
