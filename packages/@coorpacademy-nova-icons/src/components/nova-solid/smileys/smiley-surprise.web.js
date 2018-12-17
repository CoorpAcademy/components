import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zM6 9a2 2 0 1 1 4.001.001A2 2 0 0 1 6 9zm6 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </svg>
);

export default SvgComponent;
