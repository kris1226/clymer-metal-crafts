import React, { Component, PropTypes } from 'react';
import ImageSource from './ImageSource';
import ImageDesciption from './ImageDescription';

export default function Image(props) {
  return (
    <div className="product">
      <ImageSource src={props.src} />
      <ImageDesciption price={props.price}
                  desc={props.desc} />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  price: PropTypes.number,
  desc: PropTypes.string,
  onSelectImageClick: PropTypes.func
};

export default Image;
