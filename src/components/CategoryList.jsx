import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';

function CategoryList({
  categories,
  fetchCategories
}) {

  const allCategories = categories.allIds.map(id => categories.byId[id]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul>
      {
        allCategories.map(category => (
          <li key={category.id}>
            <NavLink to={`/category/${category.id}`}>
              {category.name}
            </NavLink>
          </li>
        ))
        }
    </ul>
  );
}

const mapStateToProps = state => (
  {
    categories: state.categories,
  }
);

export default connect(mapStateToProps, {
  fetchCategories,
})(CategoryList);
