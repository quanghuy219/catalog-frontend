import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Soccer Ball</h3>
        <pre>This is a soccer ball</pre>

        <a href="#/edit">Edit</a>
        <a href="#/delete">Delete</a>
      </div>
    );
  }
}

export default Item;
