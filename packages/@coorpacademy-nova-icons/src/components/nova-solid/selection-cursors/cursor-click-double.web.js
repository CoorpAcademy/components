import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path fill="currentColor" d="M13 13l4 10 1-5 5-1z" />
    <path
      fill="currentColor"
      d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10h-2c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8v2z"
    />
    <path
      fill="currentColor"
      d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6h-2c0-2.206-1.795-4-4-4s-4 1.794-4 4 1.795 4 4 4v2z"
    />
  </svg>
);

export default SvgComponent;
