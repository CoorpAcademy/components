import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.832.448A1.002 1.002 0 0 0 15 .002h-4v6h8.535L15.832.448zM19 12c.34 0 .672.033 1 .08V8.002H0v11a1 1 0 0 0 1 1h11.08A7.019 7.019 0 0 1 12 19a7 7 0 0 1 7-7zM9 .002H5a1 1 0 0 0-.832.446L.465 6.002H9v-6zM19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
