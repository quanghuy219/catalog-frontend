import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/Categories';
import { createItem } from '../actions/Items';

class AddItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const props = { ...this.props };
    props.fetchCategories();
  }

  componentWillReceiveProps(nextProps) {
    const props = { ...nextProps };
    this.setState({
      category_id: props.categories[0].id,
    });
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

  submit(e) {
    e.preventDefault();
    const props = { ...this.props };
    props.createItem(this.state)
      .then((data) => {
        this.setState({
          name: '',
          description: '',
        });
        if (data) {
          props.history.push(`/item/${data.item.id}`);
        }
      });
  }

  render() {
    const item = { ...this.state };
    const props = { ...this.props };

    return (
      <div>
        <h2>New Item</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                className="form-control"
                name="name"
                value={item.name}
                onChange={this.handleChangeName}
                required
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Category
              <select id="category" className="form-control" name="category_id" value={item.category_id} onChange={this.handleChangeCategory}>
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
                className="form-control"
                name="description"
                rows="3"
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
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);
