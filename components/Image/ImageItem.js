import React, { Component, PropTypes } from 'react';
import image from '../public/img/DSC_3.png';
import Image from './Image';
import { Link } from 'react-router';

export default function ImageItem({ image }) {
  return (
    <div className="col-md-3 col-sm-4">
      <Image desc={image.desc}
             price={image.price}
             src={image.src} />
    </div>
  );
}

ImageItem.propTypes = {
  image: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired
}
