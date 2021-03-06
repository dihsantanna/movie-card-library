import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="fix-app">
            <Header />
            <Switch>
              <Route
                path="/movie-card-library/movies/new"
                render={ (props) => <NewMovie { ...props } /> } />
              <Route
                path="/movie-card-library/movies/:id/edit"
                render={ (props) => <EditMovie { ...props } /> }
              />
              <Route
                path="/movie-card-library/movies/:id"
                render={ (props) => <MovieDetails { ...props } /> }
              />
              <Route
                path="/"
                component={ MovieList } />
              <Route path="/:*" component={ NotFound } />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
