import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={12} r={5} />
      <path d="M11 1h2v4h-2zM17.657 4.93l1.414 1.414-1.415 1.415-1.414-1.415zM17.657 19.071l-1.414-1.414 1.414-1.414 1.414 1.414zM6.344 19.071l-1.415-1.414 1.415-1.414 1.414 1.414zM6.344 4.93l1.414 1.416L6.343 7.76 4.928 6.344zM11 19h2v4h-2zM19 11h4v2h-4zM1 11h4v2H1z" />
    </g>
  </svg>
);

export default SvgComponent;
