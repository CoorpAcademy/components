import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h18v1.994h2V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h6v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M17 9.994c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.757 0-5-2.242-5-5 0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.758-2.243 5-5 5z" />
      <path d="M18 12.994h-2v5h4v-2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
