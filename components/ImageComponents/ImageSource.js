import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function ImageSource({src}) {
  return (
    <div className="image" style={{height: '162', width: '255px'}}>
      <Link to={'/image/5'}>
        <img className="img-responsive image1"
             src={src}
             alt="" />
      </Link>
    </div>
  );
}
