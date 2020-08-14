import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import { fetchCategory } from '../actions/categories';
import { createItem } from '../actions/items';

function AddItemPage({
  user,
  fetchCategory,
  createItem,
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
  fetchCategory, createItem,
})(AddItemPage);
