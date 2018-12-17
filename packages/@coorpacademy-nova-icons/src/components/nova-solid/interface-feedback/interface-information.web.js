import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 4.751a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM15 17H9v-2h2v-3h-1v-2h2a1 1 0 0 1 1 1v4h2v2z"
    />
  </svg>
);

export default SvgComponent;
