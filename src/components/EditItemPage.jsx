import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import { updateItem } from '../actions/items';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';
import useCategory from '../hooks/useCategory';
import useItem from '../hooks/useItem';

function EditPage({
  updateItem,
  showErrorMessage,
}) {
  const params = useParams();
  const { categoryId, itemId } = params;
  const history = useHistory();
  const category = useCategory(categoryId);
  const item = useItem(categoryId, itemId);

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

export default connect(null, {
  updateItem, showErrorMessage,
})(EditPage);
