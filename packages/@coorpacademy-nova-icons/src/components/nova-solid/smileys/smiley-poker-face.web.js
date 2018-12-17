import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zm2 5h2v4h-2V7zM8 7h2v4H8V7zm9 10H7v-2h10v2z"
    />
  </svg>
);

export default SvgComponent;
