import React from 'react';

function AddItemForm() {
  return (
    <div>
      <h2>New Item</h2>
      <form method="post">
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input type="text" id="name" className="form-control" name="name" value="" />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="category">
            Category
            <select id="category" className="form-control" name="category_id">
              <option value="1" selected="selected">Soccer</option>
              <option value="2" selected="selected">Basketball</option>
              <option value="3" selected="selected">Baseball</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="description">
            Description
            <textarea id="description" className="form-control" name="description" rows="3" />
          </label>
        </div>

        <input type="hidden" name="item_id" value="{{item.id}}" />
        <button type="submit" className="btn btn-primary">Submit</button>

        <div className="alert-message block-message error">
          <p>Name or description is empty</p>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
