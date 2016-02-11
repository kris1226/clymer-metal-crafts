import React, { Component, PropTypes } from 'react';
import ImageSource from '../ImageSource';

export default function Image(props) => {
  return (
    <div className="product">
      <ImageSouce src={props.src} />
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
