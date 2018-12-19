import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="#767676"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.522 2 12 2zM8 17.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM9.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm6.5 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
    />
  </svg>
);

export default SvgComponent;
