import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItem, deleteItem } from '../actions/Items';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      user_id: 0,
      id: 0,
    };
    this.itemID = props.match.params.item_id;
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const props = { ...this.props };
    fetchItem(this.itemID)
      .then(data => (
        this.setState({
          ...data.item,
        })
      ))
      .catch(() => props.history.push('/'));
  }

  delete() {
    const props = { ...this.props };
    props.deleteItem(this.itemID)
      .then(() => props.history.push('/'));
  }

  render() {
    const state = { ...this.state };
    const props = { ...this.props };
    let EditButtons = '';
    if (state.user_id === props.user.id) {
      EditButtons = (
        <div className="edit-group">
          <Link className="btn-edit" to={`/item/${state.id}/edit`}>Edit</Link>
          <Link
            className="btn-edit"
            to="#/"
            data-toggle="modal"
            data-target="#confirmDelete"
          >
            Delete
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h3>{state.name}</h3>
        <pre>{state.description}</pre>
        { EditButtons }

        {/* Modal */}
        <div
          className="modal fade"
          id="confirmDelete"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                Do you really want to delete your item?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.delete}
                  data-dismiss="modal"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    deleteItem: itemID => dispatch(deleteItem(itemID)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Item);
