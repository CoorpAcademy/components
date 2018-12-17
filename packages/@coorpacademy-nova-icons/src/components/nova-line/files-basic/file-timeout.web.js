import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 10c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm-5 7c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z" />
      <path d="M20 16h-2v-3h-2v5h4zM4 9h6v2H4zM4 13h4v2H4z" />
      <path d="M2 2h10v4h4v2h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h6v-2H2V2z" />
    </g>
  </svg>
);

export default SvgComponent;
