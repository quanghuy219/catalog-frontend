import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/user';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickLogout = () => {
    this.props.logout();
  }

  renderNavbar = () => {
    let NavbarContent;
    // Show user's name, and logout button on navbar when user has logged in
    if (this.props.user.name) {
      NavbarContent = (
        <ul className="navbar-nav">
          <li className="nav-item nav-username">{this.props.user.name}</li>
          <li className="nav-item">
            <button
              type="submit"
              className="btn btn-danger nav-button"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      );
    } else {
      // Show only login button
      NavbarContent = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="btn btn-default nav-button">Login</Link>
          </li>
        </ul>
      );
    }
    return NavbarContent;
  }

  render() {
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
            {this.renderNavbar()}
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
    logout: () => dispatch(logout()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
