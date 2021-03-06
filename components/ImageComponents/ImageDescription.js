import React, { PropTypes } from 'react';

export default function ImageDescription({desc, price}) {
  return (
    <div className="text">
      <h3>{desc}</h3>
      <p className="price">{price}</p>
    </div>
  );
}
