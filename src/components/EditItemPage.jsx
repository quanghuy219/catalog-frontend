import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import { fetchCategory } from '../actions/categories';
import { fetchItem, updateItem } from '../actions/items';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';

function EditPage({
  user,
  fetchItem,
  fetchCategory,
  updateItem,
  showErrorMessage,
}) {
  const [item, setItem] = useState({});
  const [category, setCategory] = useState({});

  const params = useParams();
  const { categoryId, itemId } = params;
  const history = useHistory();

  const getItem = async () => {
    const { success, res } = await fetchItem(categoryId, itemId);
    if (!success) {
      history.push('/');
    }
    setItem(res);
    if (res.user_id !== user.id) {
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
    getCategory();
    getItem();
  }, [categoryId, itemId]);

  const submit = async (data) => {
    const { success, res } = await updateItem(categoryId, itemId, data);
    if (success) {
      history.push(`/category/${categoryId}/item/${itemId}`);
    } else {
      const msg = getErrorMessage(res);
      showErrorMessage(msg);
    }
  };

  return (
    <div>
      <h2>Edit Item</h2>
      <Form item={item} category={category} submit={submit} />
    </div>
  );
}

const mapStateToProps = state => (
  {
    user: state.user,
  }
);

export default connect(mapStateToProps, {
  fetchItem, fetchCategory, updateItem, showErrorMessage,
})(EditPage);
