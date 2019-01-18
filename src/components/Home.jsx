import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchItems, fetchItemsByCategory } from '../actions/items';
import { fetchCategories } from '../actions/categories';

class Home extends React.Component {
  
  /**
   * Call API to get all available items and categories
   */
  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchCategories();
  }

  showItemByCategory = (categoryID) => {
    this.props.fetchItemsByCategory(categoryID);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
          <h4 className="col-header">Categories</h4>
          <ul>
            <li><NavLink to="/" onClick={() => this.props.fetchItems()}>All</NavLink></li>
            {
              this.props.categories.map(category => (
                <li key={category.id}>
                  <NavLink
                    to={`#${category.name.replace(' ', '-')}`}
                    activeStyle={{
                      color: 'red',
                    }}
                    onClick={() => {
                      this.showItemByCategory(category.id);
                    }}
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
              this.props.items.items.map(item => (
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
