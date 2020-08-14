import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Item from './components/Item';
import Notification from './components/Notification';
import EditPage from './components/EditItemPage';
import AddItemPage from './components/AddItemPage';
import ItemList from './components/ItemList';
import Loader from './components/Loader';
import { fetchUser } from './actions/user';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App({
  token,
  fetchUser,
}) {
  useEffect(() => {
    if (token) {
      fetchUser();
    }
  }, [token]);

  const renderRoutes = () => {
    if (!token) {
      return [
        <Route key="home" exact path="/"><Redirect to="/login" /></Route>,
        <Route key="login" exact path="/login" component={Login} />,
      ];
    }

    return [
      <Route key="home" exact path="/" component={Home} />,
      <Route key="categoryDetail" exact path="/category/:categoryId" component={ItemList} />,
      <Route key="itemDetail" exact path="/category/:categoryId/item/:itemId" component={Item} />,
      <Route key="createItem" exact path="/new-item" component={Form} />,
      <Route key="editItem" exact path="/category/:categoryId/item/:itemId/edit" component={EditPage} />,
      <Route key="addItem" exact path="/category/:categoryId/new-item" component={AddItemPage} />,
    ];
  };

  return (
    <Router basename="/catalog">
      <div className="App">
        <Navbar />
        <div className="container main-panel">
          <Switch>
            {renderRoutes()}
            <Redirect to="/" />
          </Switch>
        </div>
        <Notification />
        <Loader />
      </div>
    </Router>
  );
}

const mapStateToProps = state => (
  {
    token: state.user.token,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchUser: () => dispatch(fetchUser()),
  }
);

App.propTypes = {
  token: PropTypes.string,
  fetchUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  token: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
