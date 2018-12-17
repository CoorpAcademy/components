import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M11 2.002v20c5.522 0 10-4.476 10-10s-4.478-10-10-10z"
    />
  </svg>
);

export default SvgComponent;
