import React from 'react';
import { ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';

const style = {
  display: 'block',
  margin: '0 auto',
  position: 'fixed',
  top: '30%',
  left: '50%',
};

function Loader(props) {
  return (
    <div className="spinner" style={style}>
      <ClipLoader
        color="#36D7B7"
        loading={props.loader.loading}
      />
    </div>
  );
}

const mapStateToProps = state => (
  {
    loader: state.loader,
  }
);

export default connect(mapStateToProps, null)(Loader);
