import React from 'react';

class SetApiKey extends React.Component {
  state = {
    apiKey: ''
  }
  handleChange = e => this.setState({
    apiKey: e.target.value
  })
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.apiKey)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputApiKey">Clé d&apos;API TheMovieDB</label>
          <input value={this.state.apiKey} onChange={this.handleChange} name="apiKey" type="text" className="form-control" id="inputApiKey" placeholder="Saisissez votre clé d'API" required />
        </div>
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
    );
  }
}

export default SetApiKey;
