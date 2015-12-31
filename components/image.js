import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Image extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      des: 'loading',
      status: true
    }
  }

  handleSelect(id) {

  }

  render() {
    const { image, selectImage } = this.props;
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
  selectImage: PropTypes.func.isRequired
}

export default Image;
