import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import { updateItem } from '../actions/items';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';
import useCategory from '../hooks/useCategory';
import useItem from '../hooks/useItem';

function EditPage({
  user,
  updateItem,
  showErrorMessage,
}) {
  const params = useParams();
  const { categoryId, itemId } = params;
  const history = useHistory();
  const category = useCategory(categoryId);
  const item = useItem(categoryId, itemId);

  useEffect(() => {
    if (item.user_id !== user.id) {
      history.push(`/category/${categoryId}/item/${itemId}`);
    }
  }, []);

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

EditPage.propTypes = {
  updateItem: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  updateItem, showErrorMessage,
})(EditPage);
