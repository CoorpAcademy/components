import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17 4.999H7c-3.86 0-7 3.14-7 7 0 3.861 3.14 7 7 7h10c3.86 0 7-3.139 7-7 0-3.86-3.14-7-7-7zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
    />
  </svg>
);

export default SvgComponent;
