import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 7.003h6v6H7zM7 .464v4.539h6V.464a9.98 9.98 0 0 0-6 0zM19 12.003c.267 0 .529.019.787.047a9.954 9.954 0 0 0-.248-5.047H15v6h.408a6.953 6.953 0 0 1 3.592-1zM15 1.356v3.647h3.646A10.032 10.032 0 0 0 15 1.356zM5 18.65v-3.648H1.354A10.027 10.027 0 0 0 5 18.65zM1.354 5.003H5V1.356a10.032 10.032 0 0 0-3.646 3.647zM7 19.542a9.98 9.98 0 0 0 5.047.249 6.953 6.953 0 0 1 .953-4.38v-.408H7v4.539zM0 10.003a9.95 9.95 0 0 0 .461 3H5v-6H.461a9.954 9.954 0 0 0-.461 3zM19 14.588l-4.707 4.707 1.414 1.414L18 18.416v5.587h2v-5.587l2.293 2.293 1.414-1.414z" />
    </g>
  </svg>
);

export default SvgComponent;
