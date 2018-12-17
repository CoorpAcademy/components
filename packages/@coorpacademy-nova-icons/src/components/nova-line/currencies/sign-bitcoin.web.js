import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M17 8c0-1.654-1.346-3-3-3h-1V3h-2v2H7v14h4v2h2v-2h1c1.654 0 3-1.346 3-3v-2a2.98 2.98 0 0 0-.78-2 2.98 2.98 0 0 0 .78-2V8zM9 7h5c.551 0 1 .449 1 1v2c0 .552-.449 1-1 1H9V7zm6 9c0 .552-.449 1-1 1H9v-4h5c.551 0 1 .449 1 1v2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
