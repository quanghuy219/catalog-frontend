import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Form from './Form';
import { createItem } from '../actions/items';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';
import useCategory from '../hooks/useCategory';

function AddItemPage({
  user,
  createItem,
  showErrorMessage,
}) {
  const item = {};
  const params = useParams();
  const { categoryId } = params;
  const history = useHistory();
  const category = useCategory(categoryId);

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

AddItemPage.propTypes = {
  createItem: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    user: state.user,
  }
);

export default connect(mapStateToProps, {
  createItem, showErrorMessage,
})(AddItemPage);
