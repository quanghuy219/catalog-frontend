import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/User';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = { ...this.props };
    let NavbarContent;
    if (props.user) {
      NavbarContent = (
        <ul className="navbar-nav">
          <li className="nav-item nav-username">{props.user.name}</li>
          <li className="nav-item">
            <a href="/logout" className="btn btn-danger nav-button">Logout</a>
          </li>
        </ul>
      );
    } else {
      NavbarContent = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="btn btn-default nav-button">Login</Link>
          </li>
        </ul>
      );
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">Catalog</Link>
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
            {NavbarContent}
            {/* <li className="nav-item nav-username">{props.user.name}</li>
            <li className="nav-item">
              <a href="/logout" className="btn btn-danger nav-button">Logout</a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="btn btn-default nav-button">Login</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => (
  {
    user: state.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: dispatch(logout()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
