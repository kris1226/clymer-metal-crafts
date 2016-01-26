import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getVisibleImages, getImage } from '../reducers/images';
import ImageItem from '../components/ImageItem';
import ImagesList from '../components/ImagesList';
import { selectImage } from '../actions/imagesActions';

class ImagesContianer extends Component {
  render() {
    const { images, selectImage } = this.props;
    return (
      <ImagesList>
        {images.map(image =>
          <ImageItem key={image.id}
                     image={image}
                     onSelectImageClick={() => selectImage(image.id) } />
        )}
      </ImagesList>
    );
  }
}

ImagesContianer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  selectImage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    images: getVisibleImages(state),
    selectedImage: getImage(state)
  }
}

export default connect(
  mapStateToProps,
  { selectImage }
)(ImagesContianer);



/** WEBPACK FOOTER **
 ** D:/Code/Reactjs-Projects/clymer-metal-crafts/containers/ImagesContainer.js
 **/
