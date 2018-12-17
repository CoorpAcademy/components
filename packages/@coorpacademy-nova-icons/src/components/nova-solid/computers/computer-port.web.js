import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.001c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10zm-5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 3A2 2 0 1 1 12.001 15 2 2 0 0 1 12 19zm2-8h-4v-6h4v6zm3 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </svg>
);

export default SvgComponent;
