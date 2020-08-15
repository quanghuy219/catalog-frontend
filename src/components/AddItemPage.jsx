import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import { fetchCategory } from '../actions/categories';
import { createItem } from '../actions/items';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';

function AddItemPage({
  user,
  fetchCategory,
  createItem,
  showErrorMessage,
}) {
  const [category, setCategory] = useState({});
  const item = {};
  const params = useParams();
  const { categoryId } = params;
  const history = useHistory();

  const getCategory = async () => {
    const { success, res } = await fetchCategory(categoryId);
    if (!success) {
      history.push('/');
    }
    setCategory(res);
  };

  useEffect(() => {
    getCategory();
  }, [categoryId]);

  const submit = async (data) => {
    const paramsData = {};
    Object.assign(paramsData, data);
    paramsData.user_id = user.id;

    const { success, res } = await createItem(categoryId, paramsData);
    if (success) {
      history.push(`/category/${categoryId}/item/${res.id}`);
    } else {
      const msg = getErrorMessage(res);
      showErrorMessage(msg);
    }
  };

  return (
    <div>
      <h2>New Item</h2>
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
  fetchCategory, createItem, showErrorMessage,
})(AddItemPage);
