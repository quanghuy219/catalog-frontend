import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Form({
  item,
  category,
  submit,
}) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [categoryName, setCategoryName] = useState(category.name);

  const onSubmit = (e) => {
    e.preventDefault();
    submit({ name, description, price });
  };

  useEffect(() => {
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setCategoryName(category.name);
  }, [item, category]);

  return (
    <div>
      <form onSubmit={onSubmit}>
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
          <label htmlFor="category">
            Category
            <input
              id="category"
              className="form-control"
              name="category"
              value={categoryName}
              disabled
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              className="form-control"
              name="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
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

        <input type="hidden" name="item_id" value="{{item.id}}" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  item: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    user: state.user,
  }
);

export default connect(mapStateToProps, null)(Form);
