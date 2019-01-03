import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddItemForm from './components/AddItemForm';
import Login from './components/Login';
import Item from './components/Item';
import Notification from './components/Notification';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container main-panel">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/item/:item_id" component={Item} />
            <Route path="/new-item" component={AddItemForm} />
            <Route component={Home} />
          </Switch>
        </div>
        <Notification />
      </div>
    </Router>
  );
}

export default App;
