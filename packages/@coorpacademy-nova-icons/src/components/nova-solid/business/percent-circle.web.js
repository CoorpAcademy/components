import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zM9 7a2 2 0 1 1-.001 4.001A2 2 0 0 1 9 7zm-.293 9.706l-1.414-1.413 8-8 1.414 1.413-8 8zM15 17a2 2 0 1 1 .001-4.001A2 2 0 0 1 15 17z"
    />
  </svg>
);

export default SvgComponent;
