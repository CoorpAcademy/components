import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l11-11A.996.996 0 0 0 20 8zm-2-.414l-10 10L2.414 12l10-10H18v5.586z" />
      <circle cx={15} cy={5} r={2} />
      <path d="M23.707 19.292L19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
