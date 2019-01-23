import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchItems, fetchItemsByCategory } from '../actions/items';
import { fetchCategories } from '../actions/categories';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  
  /**
   * Call API to get all available items and categories
   */
  componentDidMount() {
    this.props.fetchCategories();
    const categoryID = this.props.match.params.category_id;
    if (categoryID) {
      this.showItemsByCategory(categoryID);
    } else {
      this.props.fetchItems();
    }
  }

  componentWillReceiveProps(nextProps) {
    // Convert object in nextProps.items to array of items stored in component's state
    const items = nextProps.items.allIds.map(id => nextProps.items.byId[id]);
    this.setState({
      items,
    })
  }

  shouldComponentUpdate() {
    const categories = this.props.categories;
    // Call componentDidUpdate when all categories are ready
    if (categories.length === 0) {
      return false;
    }
    return true;
  }

  /**
   * When showing items by category, check category's name in url
   * If category's name is invalid, correct category's name
   */
  componentDidUpdate() {
    const categories = this.props.categories;
    const urlCategoryID = this.props.match.params.category_id;
    if (urlCategoryID) {
      const urlCategoryName = this.props.match.params.category_name;
      const currentCategories = categories.filter(category => category.id === parseInt(urlCategoryID))
      const currentCategory = currentCategories[0];
      if (!urlCategoryName || urlCategoryName !== currentCategory.name.replace(' ', '-')) {
        this.props.history.push(`/category/${currentCategory.id}/${currentCategory.name.replace(' ', '-')}`)
      }
    }
  }

  showItemsByCategory = (categoryID) => {
    this.props.fetchItemsByCategory(categoryID)
      .catch(err => {
        this.props.history.push('/');
        this.props.fetchItems();
      })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
          <h4 className="col-header">Categories</h4>
          <ul>
            <li><NavLink exact to="/" onClick={this.props.fetchItems}>All</NavLink></li>
            {
              this.props.categories.map(category => (
                <li key={category.id}>
                  <NavLink
                    to={`/category/${category.id}/${category.name.replace(' ', '-')}`}
                    onClick={() => this.showItemsByCategory(category.id)}
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-8 col-sm-8 col-7">
          {
            (this.props.user.name) && <Link to="/new-item">Add Item</Link>
          }
          <h4 className="col-header">Latest Items</h4>
          <ul>
            {
              this.state.items.map(item => (
                <li key={item.id}>
                  <Link to={`/item/${item.id}`}>{item.name}</Link>
                  <span>
                    (
                    {item.category.name}
                    )
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    items: state.items,
    categories: state.categories,
    user: state.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchItems: () => dispatch(fetchItems()),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchItemsByCategory: categoryID => dispatch(fetchItemsByCategory(categoryID)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
