import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17 8.003c0-1.654-1.346-3-3-3h-1v-2h-2v2H7v14h4v2h2v-2h1c1.654 0 3-1.346 3-3v-2c0-.771-.301-1.467-.78-2a2.98 2.98 0 0 0 .78-2v-2zm-8-1h5c.551 0 1 .449 1 1v2c0 .552-.449 1-1 1H9v-4zm6 9c0 .552-.449 1-1 1H9v-4h5c.551 0 1 .449 1 1v2z"
    />
  </svg>
);

export default SvgComponent;
