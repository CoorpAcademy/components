import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 11c0-1.654-1.346-3-3-3h-2v2H7V8H5c-1.654 0-3 1.346-3 3v9h3v4h14v-4h3v-9zm-5 11H7v-4h10v4zm3-4h-1v-2H5v2H4v-7c0-.552.449-1 1-1v2h14v-2c.551 0 1 .448 1 1v7zM7 3h10v4h2V1H5v6h2z" />
      <circle cx={17} cy={14} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
