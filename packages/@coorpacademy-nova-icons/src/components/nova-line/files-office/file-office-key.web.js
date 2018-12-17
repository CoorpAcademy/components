import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .898-2 2v5h2V3zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM4 15.781L5.558 18H8l-2.807-4L8 10H5.558L4 12.22V10H2v8h2zM20.015 18v-3.037L22 10h-2l-1 2.5-1-2.5h-2l2 5h.015v3zM15 12v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v-2h-4v-1h3v-2h-3v-1h4z" />
    </g>
  </svg>
);

export default SvgComponent;
