import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../actions/Categories';
import { createItem, updateItem } from '../actions/Items';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
    };
    this.isEditing = props.isEditing;
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    const props = { ...this.props };
    if (!props.user.token) {
      return props.history.push('/');
    }
    return props.fetchCategories();
  }

  componentWillReceiveProps(nextProps) {
    const props = { ...nextProps };
    if ('item' in props) {
      this.setState({
        ...props.item,
      });
    } else { // set initial category for adding item
      this.setState({
        category_id: props.categories[0].id,
      });
    }
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleChangeCategory(e) {
    this.setState({
      category_id: parseInt(e.target.value, 10),
    });
  }

  submit() {
    const state = { ...this.state };
    if (!state.name || !state.description) {
      return false;
    }
    if (this.isEditing) {
      return this.edit();
    }
    return this.create();
  }

  create() {
    const props = { ...this.props };
    const state = { ...this.state };
    props.createItem(state)
      .then((data) => {
        if (data) {
          props.history.push(`/item/${data.item.id}`);
        }
      });
  }

  edit() {
    const props = { ...this.props };
    const state = { ...this.state };
    props.updateItem(state.id, state)
      .then((data) => {
        if (data) {
          props.onEditSuccess();
        }
      });
  }

  render() {
    const item = { ...this.state };
    const props = { ...this.props };

    return (
      <div>
        <h2>New Item</h2>
        <form method="post" onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                className="form-control text-input"
                name="name"
                value={item.name}
                onChange={this.handleChangeName}
                maxLength="100"
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Category
              <select
                id="category"
                className="form-control"
                name="category_id"
                value={item.category_id}
                onChange={this.handleChangeCategory}
              >
                {
                  props.categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Description
              <textarea
                id="description"
                className="form-control text-input"
                name="description"
                rows="10"
                value={item.description}
                onChange={this.handleChangeDescription}
                required
              />
            </label>
          </div>

          <input type="hidden" name="item_id" value="{{item.id}}" />
          <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  isEditing: PropTypes.bool,
};

Form.defaultProps = {
  name: '',
  description: '',
  isEditing: false,
};

const mapStateToProps = state => (
  {
    categories: state.categories,
    user: state.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchCategories: () => dispatch(fetchCategories()),
    createItem: params => dispatch(createItem(params)),
    updateItem: (itemID, params) => dispatch(updateItem(itemID, params)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
