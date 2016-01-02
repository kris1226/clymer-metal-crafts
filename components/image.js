import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

const Image = ({ item }) => {
  return (
    <div className="product">
      <div className="text">
        <h3>{item.desc}</h3>
        <p className="price">{item.price}</p>
      </div>
    </div>
  );
}

Image.propTypes = {
  item: PropTypes.object.isRequired
};

export default Image;
