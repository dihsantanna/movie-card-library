import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import '../css/movieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.markMovie = this.markMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value });
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState((state) => ({ ...state, movies: [...movies] }));
  }

  markMovie(bookmarked, id) {
    const { movies } = this.state;
    const bookmarkChanged = movies.find((movie) => Number(movie.id) === Number(id));
    bookmarkChanged.bookmarked = bookmarked;
    movieAPI.updateMovie(bookmarkChanged);
  }

  filterMovies(movies) {
    const { bookmarkedOnly: marked, selectedGenre: genre, searchText } = this.state;

    const search = movies.filter((movie) => {
      const check = (movie.title.toLowerCase()
        .includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
      return check;
    });

    const favorite = marked ? search.filter((movie) => (movie.bookmarked)) : search;

    const result = genre ? favorite.filter((movie) => movie.genre === genre) : favorite;

    return result;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

    if (!movies.length) return (<Loading />);

    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <div data-testid="movie-list" className="movie-list">
          <Link to="/movies/new" className="add-movie">ADICIONAR CARTÃO</Link>
          {this.filterMovies(movies).map((movie) => (<MovieCard
            key={ movie.title }
            movie={ movie }
            onClick={ this.markMovie }
          />))}
        </div>
      </section>
    );
  }
}

export default MovieList;
