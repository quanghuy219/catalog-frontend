import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItem, deleteItem } from '../actions/items';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      user_id: 0,
      id: 0,
    };
    this.itemID = props.match.params.item_id;
  }

  /**
   * Fetching item's data
   * Redirect to homepage if item's not found
   */
  componentDidMount() {
    const props = { ...this.props };
    props.fetchItem(this.itemID)
      .then(data => (
        this.setState({
          ...data.item,
          category: data.item.category.name,
        })
      ))
      .catch(() => props.history.push('/'));
  }

  delete = () => {
    const props = { ...this.props };
    props.deleteItem(this.itemID)
      .then(() => props.history.push('/'));
  }

  renderEditButton = () => {
    const props = { ...this.props };
    let EditButtons = '';
    // Show edit and delete buttons if current user is item's owner
    if (this.state.user_id === props.user.id) {
      EditButtons = (
        <div className="edit-group">
          <Link className="btn-edit" to={`/item/${this.state.id}/edit`}>Edit</Link>
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
    return EditButtons;
  }

  render() {
    const { name, description, category } = this.state;
    return (
      <div>
        <h3>{name}</h3>
        <p>
          Category:
          {category}
        </p>

        <p>Description:</p>
        <pre>{description}</pre>
        { this.renderEditButton() }

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
    fetchItem: itemID => dispatch(fetchItem(itemID)),
    deleteItem: itemID => dispatch(deleteItem(itemID)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Item);
