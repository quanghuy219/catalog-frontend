import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchItemsByCategory } from '../actions/items';
import CategoryList from './CategoryList';
import { fetchCategory } from '../actions/categories';

function ItemList({
  items,
  user,
  fetchCategory,
  fetchItemsByCategory,
}) {
  const [category, setCategory] = useState({});
  const params = useParams();
  const history = useHistory();
  const allItems = items.allIds.map(id => items.byId[id]);


  const { categoryId } = params;

  const getItems = async () => {
    const { success } = await fetchItemsByCategory(categoryId);
    if (!success) {
      history.push('/');
    }
  };

  const getCategory = async () => {
    const { success, res } = await fetchCategory(categoryId);
    if (!success) {
      history.push('/');
    }
    setCategory(res);
  };

  useEffect(() => {
    getItems();
    getCategory();
  }, [categoryId]);

  return (
    <div className="row">
      <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
        <h4 className="col-header">Categories</h4>
        <CategoryList />
      </div>
      <div className="col-md-8 col-sm-8 col-7">
        {
          user.token && <Link to={`/category/${categoryId}/new-item`}>Add Item</Link>
        }
        <h4>{category.description}</h4>
        <ul>
          {
            allItems.map(item => (
              <li key={item.id}>
                <Link to={`/category/${categoryId}/item/${item.id}`}>{item.name}</Link>
              </li>
            ))
          }
        </ul>
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
  fetchItemsByCategory, fetchCategory,
})(ItemList);
