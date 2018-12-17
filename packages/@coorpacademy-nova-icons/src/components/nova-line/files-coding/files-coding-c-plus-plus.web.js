import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-1h-2v1zM8 18.003v-2H5c-.551 0-1-.448-1-1v-2c0-.55.449-1 1-1h3v-2H5c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h3zM13 17.003v-2h2v-2h-2v-2h-2v2H9v2h2v2zM20 13.003v-2h-2v2h-2v2h2v2h2v-2h2v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
