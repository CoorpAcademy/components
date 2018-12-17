import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 5.003h-2v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1h-2v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5c-1.654 0-3 1.345-3 3v11c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-11c0-1.655-1.346-3-3-3zm-6 2v7a1 1 0 0 0 1 1v5h-4v-5a1 1 0 0 0 1-1v-7h2zm-9 12v-11c0-.551.449-1 1-1h2v7a1 1 0 0 0 1 1v5H5c-.551 0-1-.449-1-1zm16 0c0 .551-.449 1-1 1h-3v-5a1 1 0 0 0 1-1v-7h2c.551 0 1 .449 1 1v11z"
    />
  </svg>
);

export default SvgComponent;
