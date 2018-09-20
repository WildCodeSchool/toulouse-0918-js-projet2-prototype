import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
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

        <Header />

        <main role="main">
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

        <Footer />

      </div>
    );
  }
}

export default App;
