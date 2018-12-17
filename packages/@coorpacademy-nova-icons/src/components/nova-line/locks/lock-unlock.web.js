import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 8c-1.074 0-2.09.25-3 .686V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3.11A6.976 6.976 0 0 0 5 15c0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.859-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <circle cx={12} cy={16.5} r={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
