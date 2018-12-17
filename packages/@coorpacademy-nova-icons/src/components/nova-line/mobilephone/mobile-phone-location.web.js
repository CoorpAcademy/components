import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.007h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 7.999a3 3 0 0 0-3 3c0 2 3 5 3 5s3-3 3-5a3 3 0 0 0-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 16 12.499z" />
      <path d="M14 7.999v-4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4v-8h10zm-2-4v2H4v-2h8zm0 14v2H4v-2h8z" />
    </g>
  </svg>
);

export default SvgComponent;
