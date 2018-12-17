import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.707 10.711l-1.414-1.413L10 11.59l-1.293-1.292a.997.997 0 0 0-1.414 0L6 11.59V8.004H4v9h5v-1.998l.003-.002H6v-.586l2-2 1.293 1.293a1 1 0 0 0 1.414 0l3-3z" />
      <path d="M2 2.002h10v4h4v5.007h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h7v-2H2v-18zM19 22.002h-4v-4l-2 2v3c0 .551.448 1 1 1h6c.552 0 1-.449 1-1v-3l-2-2v4z" />
      <path d="M17.707 12.294a1 1 0 0 0-1.414 0l-6 6 1.414 1.414L17 14.416l5.293 5.292 1.414-1.414-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
