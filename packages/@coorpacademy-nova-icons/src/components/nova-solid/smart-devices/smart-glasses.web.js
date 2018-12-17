import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.006h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 3.001h-1v2h1c.551 0 1 .449 1 1v3H4v-3c0-.551.449-1 1-1h1v-2H5c-1.654 0-3 1.346-3 3v6h7v3H2v2c0 1.654 1.346 3 3 3h4.36a3.006 3.006 0 0 0 2.941-2.411l.482-2.412c.041-.205.391-.205.432 0l.482 2.411a3.006 3.006 0 0 0 2.941 2.412H21c1.654 0 3-1.346 3-3v-11c0-1.654-1.346-3-3-3z"
    />
  </svg>
);

export default SvgComponent;
