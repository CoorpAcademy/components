import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.293 9.3l-3.707 3.707 3.707 3.707L8.707 15.3l-2.293-2.293 2.293-2.293zM10.707 16.714l3.707-3.707L10.707 9.3l-1.414 1.414 2.293 2.293L9.293 15.3z" />
      <path d="M18 4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h12v-2H2v-18h10v4h4V15h2V4.59z" />
      <path d="M23.707 17.707l-1.414-1.415L20 18.586l-2.293-2.294-1.414 1.415L18.586 20l-2.293 2.292 1.414 1.415L20 21.414l2.293 2.293 1.414-1.415L21.414 20z" />
    </g>
  </svg>
);

export default SvgComponent;
