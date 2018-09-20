import React from 'react';
import SetApiKey from './SetApiKey';

class AddMovie extends React.Component {
  state = {
    apiKey: ''
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
  render() {
    const { apiKey } = this.state
    return (
      <div className="fill">
      {
        apiKey
        ? <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
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
