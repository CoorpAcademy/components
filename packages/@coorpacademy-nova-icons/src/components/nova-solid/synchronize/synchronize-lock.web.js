import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.642 4.642A8.907 8.907 0 0 1 12 2c4.963 0 9 4.038 9 9h2c0-6.065-4.935-11-11-11-2.966 0-5.72 1.167-7.772 3.228L2 1v6h6L5.642 4.642zM18.357 19.358A8.9 8.9 0 0 1 12 22c-4.963 0-9-4.038-9-9H1c0 6.066 4.935 11 11 11 2.967 0 5.721-1.167 7.771-3.229L22 23v-6h-6l2.357 2.358z" />
      <path d="M12 5c-1.654 0-3 1.346-3 3v1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1V8c0-1.654-1.346-3-3-3zm2 10h-4v-4h4v4zm-3-6V8c0-.551.449-1 1-1s1 .449 1 1v1h-2z" />
      <circle cx={12} cy={13} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
