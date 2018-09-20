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
    movie: null,
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
  onTitleInputChanged = e => {
    const title = e.target.value
    searchMovies(title, this.state.apiKey)
      .then(({ results }) => this.setState({ results }))

    this.setState({
      title
    })
  }
  onMovieSelected = idAndTitle => {
    const [idStr, title] = idAndTitle.split('-')
    const movieId = Number(idStr)
    const movie = this.state.results.find(m => m.id === movieId)
    this.setState({
      id: movieId, movie, title
    })
    // Try
    // Indiana Jones
    // Harry Potter
    // Back to the Future
    // Transformers
    // X-Men
    // Star Wars
  }
  getToken = () => getToken(this.state.apiKey)
    .then(({ request_token }) => this.setState({
      requestToken: request_token
    }))
  onSubmit = e => {
    e.preventDefault()
    const { title, overview: summary, poster_path } = this.state.movie
    const img = `${thumbnailRoot}/${poster_path}`
    console.log(this.state.movie, title, summary, img)
    this.props.onMovieAdded({ title, summary, img })
  }
  render() {
    const { apiKey, requestToken, results, title, movie } = this.state
    return (
      <div className="fill">
      {
        apiKey
        ? <form onSubmit={this.onSubmit}>
            { ! requestToken && <button className="btn" type="button" onClick={this.getToken}>token</button>}
            <div className="form-group">
              <label htmlFor="input">Saisissez le nom d'un film (ou les premières lettres)</label>
              {/*<input value={this.state.title} onChange={this.onMovieNameChanged} name="title" type="text" className="form-control" id="title" placeholder="Nom du film" />*/}
              <Autocomplete
                inputProps={{className: 'form-control'}}
                wrapperStyle={{display: 'block'}}
                getItemValue={item => `${item.id}-${item.title}`}
                items={results}
                renderItem={(item, isHighlighted) =>
                  <div key={item.id} className="col-md-2 col-sm-12" style={{ background: isHighlighted ? 'lightgray' : 'white', position: 'relative' }}>
                    <img className="img-fluid" src={`${thumbnailRoot}/${item.poster_path}`} />
                    <div className="autocomplete-thumbnail">{item.title}</div>
                  </div>
                }
                renderMenu={(items, value, style) => {
                  return <div className="row" style={{ ...style, ...this.menuStyle }} children={items}/>
                }}
                value={title}
                onChange={ this.onTitleInputChanged }
                onSelect={ this.onMovieSelected }
              />
            </div>
            <div>
            {
              movie && <div>
                <img style={{maxHeight: '200px', float: 'left', marginRight: '20px'}} src={`${thumbnailRoot}/${movie.poster_path}`} />
                <h5>{ movie.title }</h5>
                <p>{ movie.overview }</p>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            }
            </div>
          </form>
        : <SetApiKey onSubmit={this.onApiKeySubmit} />
      }
      </div>
    );
  }
}

export default AddMovie;
