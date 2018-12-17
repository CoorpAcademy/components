import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.007h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 16.999v1H4v-12h8v1h2v-3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-2z" />
      <path d="M16 7.999a3 3 0 0 0-3 3c0 2 3 5 3 5s3-3 3-5a3 3 0 0 0-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 16 12.499z" />
    </g>
  </svg>
);

export default SvgComponent;
