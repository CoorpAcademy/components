import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M21.707 11.294l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9a.997.997 0 0 0 1.414-.001l9-9a.998.998 0 0 0 0-1.413zM11 8h2v6h-2V8zm1 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
    />
  </svg>
);

export default SvgComponent;
