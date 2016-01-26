import React, { Component, PropTypes } from 'react';

const Image = (props) => {
  return (
    <div className="product">
      <ImageSouce src={props.src}
                  onSelectImageClick={props.onSelectImageClick} />
      <Desciption price={props.price}
                  desc={props.desc} />
    </div>
  );
}

const ImageSouce = ({src, onSelectImageClick}) => {
  return (
    <div className="image" style={{height: '162', width: '255px'}}>
      <a href="#" onClick={onSelectImageClick}>
        <img className="img-responsive image1"
             src={src}
             alt="" />
      </a>
    </div>
  );
}

const Desciption = ({desc, price}) => {
  return (
    <div className="text">
      <h3>{desc}</h3>
      <p className="price">{price}</p>
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
