import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItemsByCategory } from '../actions/items';
import { fetchCategories } from '../actions/categories';
import CategoryList from './CategoryList';

function Home() {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
        <Link to="/new-category">Add Category</Link>
        <h4 className="col-header">Categories</h4>
        <CategoryList />
      </div>
    </div>
  );
}

const mapStateToProps = state => (
  {
    items: state.items,
    categories: state.categories,
    user: state.user,
  }
);

export default connect(mapStateToProps, {
  fetchCategories,
  fetchItemsByCategory,
})(Home);
