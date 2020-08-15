import React, { useEffect, useState } from 'react';
import PropsType from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchCategories } from '../actions/categories';
import { genPaginationParams } from '../utils/helpers';
import usePagination from '../hooks/usePagination';

function CategoryList({
  categories,
  fetchCategories,
}) {
  const allCategories = categories.allIds.map(id => categories.byId[id]);
  const [totalCategories, setTotalCategories] = useState(10);
  const categoriesPerPage = 10;
  const {
    totalPages,
  } = usePagination(totalCategories, categoriesPerPage);

  const getCategories = async (page) => {
    const paginationParams = genPaginationParams(page, categoriesPerPage);
    const { res } = await fetchCategories(paginationParams);
    setTotalCategories(res.total_categories);
  };

  useEffect(() => {
    getCategories(0);
  }, []);

  const handlePageClick = (data) => {
    getCategories(data.selected);
  };

  return (
    <>
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
    </>
  );
}

CategoryList.propTypes = {
  fetchCategories: PropsType.func.isRequired,
};

const mapStateToProps = state => (
  {
    categories: state.categories,
  }
);

export default connect(mapStateToProps, {
  fetchCategories,
})(CategoryList);
