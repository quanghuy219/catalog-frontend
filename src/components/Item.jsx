import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItem } from '../actions/Items';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      user_id: 0,
      id: 0,
    };
  }

  componentDidMount() {
    const props = { ...this.props };
    const itemId = props.match.params.item_id;
    fetchItem(itemId)
      .then(data => (
        this.setState({
          ...data.item,
        })
      ))
      .catch(() => props.history.push('/'));
  }

  render() {
    const state = { ...this.state };
    const props = { ...this.props };
    let EditButtons = '';
    if (state.user_id === props.user.id) {
      EditButtons = (
        <div className="edit-buttons">
          <Link to="#/edit">Edit</Link>
          <Link to="#/delete">Delete</Link>
        </div>
      );
    }
    return (
      <div>
        <h3>{state.name}</h3>
        <pre>{state.description}</pre>
        { EditButtons }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    user: state.user,
  }
);

export default connect(mapStateToProps, null)(Item);
