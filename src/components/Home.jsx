import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItems, fetchItemsByCategory } from '../actions/Items';
import { fetchCategories } from '../actions/Categories';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.showItemByCategory = this.showItemByCategory.bind(this);
    props.fetchItems();
    props.fetchCategories();
  }

  showItemByCategory(categoryID) {
    const props = { ...this.props };
    props.fetchItemsByCategory(categoryID);
  }

  render() {
    const props = { ...this.props };
    return (
      <div className="row">
        <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
          <h4 className="col-header">Categories</h4>
          <ul>
            <li><NavLink to="/" onClick={() => props.fetchItems()}>All</NavLink></li>
            {
              props.categories.map(category => (
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
          {(() => {
            if (props.user.name) {
              return <Link to="/new-item">Add Item</Link>;
            }
            return '';
          }
          )()}
          <h4 className="col-header">Latest Items</h4>
          <ul>
            {
              props.items.items.map(item => (
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

Home.propTypes = {
  fetchItems: PropTypes.func,
  fetchCategories: PropTypes.func,
};

Home.defaultProps = {
  fetchItems: null,
  fetchCategories: null,
};

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