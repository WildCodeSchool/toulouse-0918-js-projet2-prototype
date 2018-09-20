import React from 'react';
import Autocomplete from 'react-autocomplete';
import SetApiKey from './SetApiKey';
import { getToken, searchMovies } from './helpers/api';

class AddMovie extends React.Component {
  state = {
    apiKey: '',
    requestToken: '',
    movieName: '',
    results: []
  }
  componentDidMount() {
    const apiKey = localStorage.getItem('wmTmdbKey')
    if (apiKey === null) {
      return
    }
    console.log('apiKey', apiKey)
    this.setState({ apiKey })
  }
  onApiKeySubmit = apiKey => {
    localStorage.setItem('wmTmdbKey', apiKey)
    this.setState({ apiKey })
  }
  onMovieNameChanged = e => {
    const movieName = e.target.value
    // Try
    // Indiana Jones
    // Harry Potter
    // Back to the Future
    // Transformers
    // X-Men
    // Star Wars
    searchMovies(movieName, this.state.apiKey)
      .then(({ results }) => this.setState({ results }))
    this.setState({
      movieName
    })
  }
  getToken = () => getToken(this.state.apiKey)
    .then(({ request_token }) => this.setState({
      requestToken: request_token
    }))
  render() {
    const { apiKey, requestToken, results, title } = this.state
    return (
      <div className="fill">
      {
        apiKey
        ? <form>
            { ! requestToken && <button className="btn" type="button" onClick={this.getToken}>token</button>}
            <div className="form-group">
              <label htmlFor="input">Saisissez le nom d'un film (ou les premières lettres)</label>
              <input value={this.state.movieName} onChange={this.onMovieNameChanged} name="movieName" type="text" className="form-control" id="movieName" placeholder="Nom du film" />
            </div>
            {
              results.length && <Autocomplete
                getItemValue={item => item.title}
                items={results}
                renderItem={(item, isHighlighted) =>
                  <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.title}
                  </div>
                }
                value={title}
                onChange={ e => this.setState({ title: e.target.value }) }
                onSelect={ val => this.setState({ title: val }) }
              />
            }
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        : <SetApiKey onSubmit={this.onApiKeySubmit} />
      }
      </div>
    );
  }
}

export default AddMovie;
