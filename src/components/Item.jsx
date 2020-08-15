import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { fetchCategory } from '../actions/categories';
import { fetchItem, deleteItem } from '../actions/items';

function Item({
  user,
  fetchCategory,
  fetchItem,
  deleteItem,
}) {
  const [item, setItem] = useState({});
  const [category, setCategory] = useState({});

  const params = useParams();
  const history = useHistory();
  const { categoryId, itemId } = params;

  const getItem = async () => {
    const { success, res } = await fetchItem(categoryId, itemId);
    if (!success) {
      history.push('/');
    }
    setItem(res);
  };

  const getCategory = async () => {
    const { success, res } = await fetchCategory(categoryId);
    if (!success) {
      history.push('/');
    }
    setCategory(res);
  };

  useEffect(() => {
    getItem();
    getCategory();
  }, [categoryId, itemId]);

  const renderEditButton = () => {
    let EditButtons = '';
    // Show edit and delete buttons if current user is item's owner
    if (item.user_id === user.id) {
      EditButtons = (
        <div className="edit-group">
          <Link
            className="btn-edit"
            to={`/category/${category.id}/item/${item.id}/edit`}
          >
            Edit
          </Link>
          <Link
            className="btn-edit"
            to="#/"
            data-toggle="modal"
            data-target="#confirmDelete"
          >
            Delete
          </Link>
        </div>
      );
    }
    return EditButtons;
  };

  const delItem = async () => {
    const { success } = await deleteItem(categoryId, itemId);
    if (success) {
      history.push(`/category/${categoryId}`);
    }
  };

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </BreadcrumbItem>
      </Breadcrumb>

      <h3>{item.name}</h3>

      <p>
        Price:
        {' '}
        {item.price}$
      </p>

      <p>Description:</p>
      <pre>{item.description}</pre>
      { renderEditButton() }

      <div
        className="modal fade"
        id="confirmDelete"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              Do you really want to delete your item?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={delItem}
                data-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
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
  fetchItem, deleteItem, fetchCategory,
})(Item);
