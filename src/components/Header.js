import React from 'react';
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Card Library CRUD</h1>
      </header>
    );
  }
}

export default Header;
