import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getVisibleImages, getImage } from '../reducers/images';
import { routeActions } from 'react-router-redux';
import ImageItem from '../components/ImageComponents/ImageItem';
import ImagesList from '../components/ImageComponents/ImagesList';
import { selectImage, getAllImages } from '../actions/imagesActions';

const loadData = (props) => {
  props.getAllImages();
}
export default class ImagesContianer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    loadData(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.images === null) {
      debugger;
      loadData(nextProps)
    }
  }
  render() {
    const { images, selectImage, push } = this.props;
    return (
      <ImagesList>
        {images.map(image =>
          <ImageItem key={image.id}
                     image={image} />
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
  })).isRequired
}

function mapStateToProps(state) {
  const { pathname } = state.routing.location;
  return {
    images: getVisibleImages(state)
  }
}

export default connect(mapStateToProps, {
  getAllImages
})(ImagesContianer);



/** WEBPACK FOOTER **
 ** D:/Code/Reactjs-Projects/clymer-metal-crafts/containers/ImagesContainer.js
 **/



/** WEBPACK FOOTER **
 ** D:/Code/Reactjs-Projects/clymer-metal-crafts/containers/ImagesContainer.js
 **/


/** WEBPACK FOOTER **
 ** D:/Code/Reactjs-Projects/clymer-metal-crafts/containers/ImagesContainer.js
 **/


/** WEBPACK FOOTER **
 ** D:/Code/Reactjs-Projects/clymer-metal-crafts/containers/ImagesContainer.js
 **/
