import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 12.002c-.551 0-1 .448-1 1v2H7v-2c0-2.757 2.243-5 5-5h3v-4H2v16h13v-8h-3z" />
      <path d="M17 5.587l-1.414 1.414 2 2H12c-2.205 0-4 1.794-4 4v1h2v-1c0-1.102.896-2 2-2h5.586l-2 2L17 14.416l4.414-4.414L17 5.587z" />
    </g>
  </svg>
);

export default SvgComponent;
