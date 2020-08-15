import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchItemsByCategory } from '../actions/items';
import CategoryList from './CategoryList';
import useCategory from '../hooks/useCategory';
import { genPaginationParams } from '../utils/helpers';
import usePagination from '../hooks/usePagination';

function ItemList({
  items,
  fetchItemsByCategory,
}) {
  const params = useParams();
  const history = useHistory();
  const allItems = items.allIds.map(id => items.byId[id]);
  const { categoryId } = params;
  const totalItemsPerPage = 20;
  const [totalItems, setTotalItems] = useState(totalItemsPerPage);

  const category = useCategory(categoryId);
  const {
    totalPages,
  } = usePagination(totalItems, totalItemsPerPage);

  const getItems = async (page) => {
    const paginationParams = genPaginationParams(page, totalItemsPerPage);
    const { success, res } = await fetchItemsByCategory(categoryId, paginationParams);
    if (!success) {
      history.push('/');
    }
    setTotalItems(res.total_items);
  };

  useEffect(() => {
    getItems(0);
  }, [categoryId]);

  const handlePageClick = (data) => {
    getItems(data.selected);
  };

  return (
    <div className="row">
      <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
        <h4 className="col-header">Categories</h4>
        <CategoryList />
      </div>
      <div className="col-md-8 col-sm-8 col-7">
        <Link to={`/category/${categoryId}/new-item`}>Add Item</Link>
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
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

ItemList.propTypes = {
  fetchItemsByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    items: state.items,
  }
);

export default connect(mapStateToProps, {
  fetchItemsByCategory,
})(ItemList);
