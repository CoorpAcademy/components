import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M9 0H5a1 1 0 0 0-.832.445L.465 6H9V0zM15.832.445A1.001 1.001 0 0 0 15 0h-4v6h8.535L15.832.445zM19 12c.34 0 .672.033 1 .08V8H0v11a1 1 0 0 0 1 1h11.08a7.002 7.002 0 0 1-.08-1 7 7 0 0 1 7-7z" />
      <path d="M23.707 15.707l-1.414-1.414L20.586 16H15v2h3.586l-1 1H14v2h3v3h2v-3.586l1-1V23h2v-5.586z" />
    </g>
  </svg>
);

export default SvgComponent;
