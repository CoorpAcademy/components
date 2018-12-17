import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.451A1 1 0 0 0 15 .005h-4v6h8.535L15.832.451zM18 10.001c.691 0 1.359.097 2 .263V8.005H0v11a1 1 0 0 0 1 1h9.264A7.984 7.984 0 0 1 10 18.001a8 8 0 0 1 8-8zM9 .005H5a1 1 0 0 0-.832.446L.465 6.005H9v-6z" />
      <path d="M18 12c-3.309 0-6 2.694-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.306-2.692-6-6-6zm1 10h-2v-4h2v4zm-1-4.999a1 1 0 1 1-.002-1.998A1 1 0 0 1 18 17z" />
    </g>
  </svg>
);

export default SvgComponent;
