import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.003h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.5 10.999l4.5-4h-3v-4h-3v4h-3zM7.5 2.999l-4.5 4h3v4h3v-4h3zM15 12.999H9v2h2v6h2v-6h2zM5 18.999v-6H3v8h5v-2zM22 14.999v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v-2h-4v-1h3v-2h-3v-1h4z" />
    </g>
  </svg>
);

export default SvgComponent;
