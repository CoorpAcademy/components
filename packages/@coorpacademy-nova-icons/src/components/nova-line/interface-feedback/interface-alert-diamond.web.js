import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 22a.997.997 0 0 1-.707-.293l-9-9a.999.999 0 0 1 0-1.414l9-9a.999.999 0 0 1 1.414 0l9 9a.999.999 0 0 1 0 1.414l-9 9A.993.993 0 0 1 12 22zM4.414 12L12 19.586 19.586 12 12 4.415 4.414 12z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M11 8h2v6h-2z" />
    <circle cx={12} cy={16} r={1.25} fill="currentColor" />
  </svg>
);

export default SvgComponent;
