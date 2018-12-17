import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V5c0-1.103-.896-2-2-2zM9 7a2 2 0 1 1-.001 4.001A2 2 0 0 1 9 7zm-1.707 8.293l8-8 1.414 1.413-8 8-1.414-1.413zM15 17a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 17z"
    />
  </svg>
);

export default SvgComponent;
