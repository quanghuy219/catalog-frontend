import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchItems from '../../actions/items';
import fetchCategories from '../../actions/categories';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-4 col-5" style={{ borderRight: '1px solid #bbbec1' }}>
          <h4 className="col-header">Categories</h4>
          <ul>
            {
              this.props.categories.map(category => (
                <li key={category.id}><Link to="#">{category.name}</Link></li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-8 col-sm-8 col-7">
          <Link to="/new-item">Add Item</Link>
          <h4 className="col-header">Latest Items</h4>
          <ul>
            {
              this.props.items.map(item => (
                <li key={item.id}>
                  <Link to="/item">{item.name}</Link>
                  <span>
                    (
                    {item.category.name}
                    )
                  </span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    items: state.items,
    categories: state.categories,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchItems: () => dispatch(fetchItems()),
    fetchCategories: () => dispatch(fetchCategories()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
