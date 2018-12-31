import React from 'react';

function Home() {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
        <h4 className="col-header">Categories</h4>
        <ul>
          <li><a href="#/">Soccer</a></li>
          <li><a href="#/">Baseball</a></li>
          <li><a href="#/">Basketball</a></li>
          <li><a href="#/">Frisbee</a></li>
        </ul>
      </div>
      <div className="col-md-8 col-sm-8 col-7">
        <a href="#/categories/items/new">Add Item</a>
        <h4 className="col-header">Latest Items</h4>
        <ul>
          <li>
            <a href="#/">Soccer Ball</a>
            <span>(Soccer)</span>
          </li>
          <li>
            <a href="#/">Soccer Ball</a>
            <span>(Soccer)</span>
          </li>
          <li>
            <a href="#/">Soccer Ball</a>
            <span>(Soccer)</span>
          </li>
          <li>
            <a href="#/">Soccer Ball</a>
            <span>(Soccer)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
