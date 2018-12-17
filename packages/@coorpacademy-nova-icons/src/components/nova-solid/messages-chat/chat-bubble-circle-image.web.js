import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M11.998 3.001c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836L.998 21.001h11c5.514 0 10-4.037 10-9s-4.486-9-10-9zm-1.5 4a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 .001-3.001zm-3.5 8l2.053-3.295 1.436 2.301 2.984-4.787 3.602 5.781H6.998z"
    />
  </svg>
);

export default SvgComponent;
