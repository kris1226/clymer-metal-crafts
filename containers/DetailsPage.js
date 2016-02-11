import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { loadUser } from '../actions/imagesActions';
import Image from '../components/ImageComponents/Image';

class DetailsPage extends Component {
  render() {
    debugger;
    const { image, params, children } = this.props;
    const course = IMAGES[params.imageId];
    if(!item) {
      return <h1><i>Loding { item }...</i></h1>
    }

    return(
      <div className="col-md-9">
        <Image
          src={image.src}
          price={image.price}
          desc={image.desc} />
      </div>
    );
  }
}

DetailsPage.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.objec
};

function mapStateToProps(state) {
  const { id } = state.router.params;
  const { item } = state;

  return {
    id,
    item
  };
}

export default connect(mapStateToProps, {
  pushState
})(DetailsPage);
