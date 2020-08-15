import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createCategory } from '../actions/categories';
import { showErrorMessage } from '../actions/notifications';
import { getErrorMessage } from '../utils/helpers';

function AddCategoryPage({
  createCategory,
  showErrorMessage,
}) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const { success, res } = await createCategory({ name, description });
    if (success) {
      history.push('/');
    } else {
      const msg = getErrorMessage(res);
      showErrorMessage(msg);
    }
  };

  return (
    <div>
      <h4>New Category</h4>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              className="form-control text-input"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength="100"
              required
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              className="form-control text-input"
              name="description"
              rows="10"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

AddCategoryPage.propTypes = {
  createCategory: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
};

export default connect(null, {
  createCategory, showErrorMessage,
})(AddCategoryPage);
