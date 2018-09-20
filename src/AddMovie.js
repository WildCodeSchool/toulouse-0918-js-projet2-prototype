import React from 'react';
import Autocomplete from 'react-autocomplete';
import SetApiKey from './SetApiKey';
import { getToken, searchMovies } from './helpers/api';

const thumbnailRoot = 'http://image.tmdb.org/t/p/w200'

class AddMovie extends React.Component {
  state = {
    apiKey: '',
    requestToken: '',
    title: '',
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
    const title = e.target.value
    // Try
    // Indiana Jones
    // Harry Potter
    // Back to the Future
    // Transformers
    // X-Men
    // Star Wars
    searchMovies(title, this.state.apiKey)
      .then(({ results }) => this.setState({ results }))
    this.setState({
      title
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
              {/*<input value={this.state.title} onChange={this.onMovieNameChanged} name="title" type="text" className="form-control" id="title" placeholder="Nom du film" />*/}
              <Autocomplete
                inputProps={{className: 'form-control'}}
                wrapperStyle={{display: 'block'}}
                getItemValue={item => item.title}
                items={results}
                renderItem={(item, isHighlighted) =>
                  <div className="col-md-2 col-sm-12" style={{ background: isHighlighted ? 'lightgray' : 'white', position: 'relative' }}>
                    <img className="img-fluid" src={`${thumbnailRoot}/${item.poster_path}`} />
                    <div className="autocomplete-thumbnail">{item.title}</div>
                  </div>
                }
                renderMenu={(items, value, style) => {
                  return <div className="row" style={{ ...style, ...this.menuStyle }} children={items}/>
                }}
                getItemValue={item => { console.log(item); return item.title; }}
                value={title}
                onChange={ this.onMovieNameChanged }
                onSelect={ val => this.setState({ title: val }) }
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        : <SetApiKey onSubmit={this.onApiKeySubmit} />
      }
      </div>
    );
  }
}

export default AddMovie;
