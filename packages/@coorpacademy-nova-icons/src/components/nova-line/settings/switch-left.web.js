import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M17 18.999H7c-3.859 0-7-3.139-7-7 0-3.86 3.141-7 7-7h10c3.859 0 7 3.14 7 7 0 3.861-3.141 7-7 7zm-10-12c-2.757 0-5 2.243-5 5s2.243 5 5 5h10c2.757 0 5-2.243 5-5s-2.243-5-5-5H7z"
      fill="currentColor"
    />
    <circle cx={7} cy={11.999} r={3} fill="currentColor" />
  </svg>
);

export default SvgComponent;
