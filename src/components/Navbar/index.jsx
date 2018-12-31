import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">Catalog</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse navbar-items" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item nav-username">Pham Quang Huy</li>
          <li className="nav-item">
            <a href="/logout" className="btn btn-danger nav-button">Logout</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="btn btn-default nav-button">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
