import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Item from './components/Item';
import Notification from './components/Notification';
import Edit from './components/Edit';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  return (
    <Router basename="/catalog-frontend">
      <div className="App">
        <Navbar />
        <div className="container main-panel">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/item/:item_id" component={Item} />
            <Route exact path="/new-item" component={Form} />
            <Route exact path="/item/:item_id/edit" component={Edit} />
            <Route component={Home} />
          </Switch>
        </div>
        <Notification />
      </div>
    </Router>
  );
}

export default App;
