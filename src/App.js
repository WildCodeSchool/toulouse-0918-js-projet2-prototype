import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import Alert from './Alert';

const hardcodedMovies = [
  {
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "img": "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    "summary": "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too."
  },
  {
    "title": "Matrix",
    "img": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",
    "summary": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    "title": "Interstellar",
    "img": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    "summary": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    "title": "Hook",
    "img": "https://m.media-amazon.com/images/M/MV5BNmJjNTQzMjctMmE2NS00ZmYxLWE1NjYtYmRmNjNiMzljOTc3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    "summary": "When Captain Hook kidnaps his children, an adult Peter Pan must return to Neverland and reclaim his youthful spirit in order to challenge his old enemy."
  },
  {
    "title": "Aliens",
    "img": "https://m.media-amazon.com/images/M/MV5BYzVlMWViZGEtYjEyYy00YWZmLThmZGEtYmM4MDZlN2Q5MmRmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,664,1000_AL_.jpg",
    "summary": "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost."
  },
  {
    "title": "Star Wars: A New Hope",
    "img": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg",
    "summary": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station..."
  }
]
class App extends Component {

  constructor(props) {
    super(props)
    const storedMovies = localStorage.getItem('wmMovies')
    let movies = hardcodedMovies.map((m, idx) => ({ ...m, id: idx + 1 }))
    console.log('stored', storedMovies)
    if (storedMovies) {
      try {
        movies = JSON.parse(storedMovies)
        console.log('parsed', movies)
      } catch(e) {}
    }
    const nextId = movies.reduce((carry, m) => Math.max(carry, m.id), 0) + 1
    this.state = { movies, nextId }
  }

  onMovieAdded = movie => {
    const id = this.state.nextId
    const movies = this.state.movies.map(m => ({ ...m })).concat({ ...movie, id })
    localStorage.setItem('wmMovies', JSON.stringify(movies))
    const alert = { status: 'success', message: `Le film ${movie.title} a été ajouté à votre collection` }
    this.setState({ movies, nextId: id + 1, alert })
    setTimeout(this.removeAlert, 2000)
  }

  removeAlert = () => this.setState({ alert: null })

  render() {
    const { movies, alert } = this.state
    return (
      <Router>
        <div>

          <Header />

          { alert && <Alert alert={alert} /> }

          <main role="main">
            <div className="album py-5 bg-light">
              <div className="container">

                <Switch>
                  <Route exact path="/" render={() => <MovieList movies={movies} />} />
                  <Route exact path="/add-movie" render={() => <AddMovie onMovieAdded={this.onMovieAdded} />} />
                </Switch>

              </div>
            </div>
          </main>

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
