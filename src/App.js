import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import AddItemForm from './components/AddItemForm';
// import Login from './components/Login';
// import Item from './components/Item';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main-panel">
        <Home />
      </div>
    </div>
  );
}

export default App;
