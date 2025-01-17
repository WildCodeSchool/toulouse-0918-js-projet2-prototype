import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">WildMovies</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/*<li className="nav-item active">
            <Link className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></Link>
          </li>*/}
          <li className="nav-item">
            <Link className="nav-link" to="/add-movie">Ajouter</Link>
          </li>
        </ul>
        {/*<form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
        </form>*/}
      </div>
    </nav>

  </header>
)

export default Header;
