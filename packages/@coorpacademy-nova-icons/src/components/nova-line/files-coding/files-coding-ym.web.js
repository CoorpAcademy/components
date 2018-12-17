import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.414 1.003H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2V5.59l-4.586-4.587zM5 21.003v-18h10v4h4l.001 14H5z" />
      <path d="M10 11.006l-1 2.5-1-2.5H6l2 5h.015v3h2v-3.035L12 11.006z" />
      <path d="M17.29 11.049a1.001 1.001 0 0 0-1.122.402L15 13.204l-1.168-1.752a1 1 0 1 0-1.832.554v7h2v-3.697l.168.251c.371.557 1.293.557 1.664 0l.168-.251v3.697h2v-7a1 1 0 0 0-.71-.957z" />
    </g>
  </svg>
);

export default SvgComponent;
