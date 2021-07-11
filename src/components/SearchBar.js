import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './generics/Input';
import Select from './generics/Select';
import genres from '../genres';
import '../css/searchBar.css';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form
        className="form-searchBar"
      >
        <Input
          id="include-text"
          textLabel="Inclui o texto:"
          value={ searchText }
          onChange={ onSearchTextChange }
          name="searchText"
        />
        <Input
          id="show-favorites"
          textLabel="Mostrar somente favoritos"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          name="bookmarkedOnly"
        />
        <Select
          id="gender-filter"
          dataTestidSelect="select-input"
          textLabel="Filtrar por gênero"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          options={ genres }
          name="selectedGenre"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
