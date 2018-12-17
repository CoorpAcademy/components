import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18a7.96 7.96 0 0 1 2-5.279V2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8c.088 0 .171-.015.256-.025A7.99 7.99 0 0 1 10 18zm-8-2V4h8v12H2zM18 12l1.714 4.286H24l-3.708 3.13L22.285 24 18 21.166 13.714 24l1.994-4.584L12 16.286h4.285z" />
    </g>
  </svg>
);

export default SvgComponent;
