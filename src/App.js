import React, { Component } from 'react';
import MovieCard from './MovieCard';

const movies = [
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
  render() {
    return (
      <div>

        <header>
          <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                    <li><a href="#" className="text-white">Email me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container d-flex justify-content-between">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <strong>Album</strong>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>

        <main role="main">

          {/*<section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Album example</h1>
              <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
              <p>
                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
              </p>
            </div>
          </section>*/}

          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row">
              {
                movies.map((m, idx) => <MovieCard key={idx} movie={m} />)
              }
              </div>
            </div>
          </div>

        </main>

        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
