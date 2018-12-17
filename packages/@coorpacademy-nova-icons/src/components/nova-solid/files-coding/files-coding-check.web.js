import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 14.091V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h11.348A5.99 5.99 0 0 1 13 20.001c0-.702.127-1.374.349-2.001H12v-4h2v2.688a5.995 5.995 0 0 1 4-2.597zM3 8.003h2v4H3v-4zM6 18H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4zM12 1l5 5h-5V1zm0 11.003v-4h2v4h-2z" />
      <path d="M22.293 16.294L18 20.587l-2.293-2.293-1.414 1.414L18 23.414l5.707-5.706z" />
    </g>
  </svg>
);

export default SvgComponent;
