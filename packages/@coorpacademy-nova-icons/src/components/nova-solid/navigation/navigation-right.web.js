import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      fill="currentColor"
      d="M22.707 11.295l-9-9A.999.999 0 0 0 12 3.001v3H2a1 1 0 0 0-1 1v4a1 1 0 0 0 .293.707l6 6a.997.997 0 0 0 .707.293h4v3a1.002 1.002 0 0 0 1.707.707l9-9a.998.998 0 0 0 0-1.413zM9 16.001l-6-6h6v6z"
    />
  </svg>
);

export default SvgComponent;
