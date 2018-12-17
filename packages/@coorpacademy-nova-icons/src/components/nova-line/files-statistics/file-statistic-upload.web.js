import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 12.418l1.293 1.293a1 1 0 0 0 1.414 0l3-3-1.414-1.413L10 11.59l-1.293-1.292a.997.997 0 0 0-1.414 0L6 11.59V8.004H4v9h8v-2H6v-.586l2-2z" />
      <path d="M2 2.002h10v4h4v6.007h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h10v-2H2v-18zM19 14.586l-4.707 4.707 1.414 1.415L18 18.415v5.587h2v-5.587l2.293 2.293 1.414-1.415z" />
    </g>
  </svg>
);

export default SvgComponent;
