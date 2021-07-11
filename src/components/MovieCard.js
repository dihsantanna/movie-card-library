import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/movieCard.css';

class MovieCard extends React.Component {
  constructor({ movie }) {
    super();
    this.state = {
      bookmarked: movie.bookmarked,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, movie: { id } } = this.props;

    this.setState((state) => ({
      bookmarked: !state.bookmarked,
    }), () => {
      const { bookmarked } = this.state;
      onClick(bookmarked, id);
    });
  }

  render() {
    const { movie } = this.props;

    const { title, subtitle, rating, storyline, imagePath, id } = movie;

    const { bookmarked } = this.state;

    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="bookmarked">
          <button type="button" onClick={ this.handleClick }>
            <i
              className="bi bi-bookmark-star-fill"
              style={ bookmarked ? { color: '#f48024' } : { color: '#6e6e6edd' } }
            />
          </button>
        </div>
        <div className="movie-card-body">
          <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
          <span className="rating">{ rating }</span>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    rating: PropTypes.node,
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func,
};

MovieCard.defaultProps = {
  onClick: () => {},
};

export default MovieCard;
