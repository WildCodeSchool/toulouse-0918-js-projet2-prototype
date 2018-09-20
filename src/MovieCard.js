import React from 'react';

const MovieCard = ({ movie: { title, img, summary } }) => (
  <div className="col-md-3">
    <div className="card mb-4 shadow-sm">
      <img className="card-img-top" src={ img || '/img/thumbnail.svg' } alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{ summary }</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
)

export default MovieCard;
