import React, { Component, PropTypes } from 'react';

export default function ImagesList (props) {
  return (
    <div id="content">
      <div className="container">
        <div className="col-sm-12">
          <div className="box text-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

ImagesList.propTypes = {
  children: PropTypes.node
}
