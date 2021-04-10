import React from 'react';
import {Link} from 'react-router-dom';

const Navigasi = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="#">MyLogo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/user' className="nav-link" href="#">Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};
export default Navigasi;