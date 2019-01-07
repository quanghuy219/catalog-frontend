import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { fetchCategories } from '../actions/Categories';
import { fetchItem } from '../actions/Items';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
    this.onSuccess = this.onSuccess.bind(this);
  }

  componentDidMount() {
    const props = { ...this.props };
    this.itemID = props.match.params.item_id;
    if (!props.user.token) {
      props.history.push('/');
    }
    fetchItem(this.itemID)
      .then(data => (
        this.setState({
          ...data.item,
        }, () => {
          const { user_id } = { ...this.state };

          if (user_id !== props.user.id) {
            props.history.push('/');
          }
        })
      ))
      .catch(() => (props.history.push('/')));
  }

  onSuccess() {
    const props = { ...this.props };
    props.history.push(`/item/${this.itemID}`);
  }

  render() {
    const {
      id, name, description, category_id,
    } = { ...this.state };
    const item = {
      id,
      name,
      description,
      category_id,
    };
    return <Form item={item} isEditing onEditSuccess={this.onSuccess} />;
  }
}

const mapStateToProps = state => (
  {
    categories: state.categories,
    user: state.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchCategories: () => dispatch(fetchCategories()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
