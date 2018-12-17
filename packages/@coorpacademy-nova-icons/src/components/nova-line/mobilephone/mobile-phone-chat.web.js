import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.007h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 8.999h-7v7l2-2h5zM14 7.999v-4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H4v-8h10zm-2-4v2H4v-2h8zm0 14v2H4v-2h8z" />
    </g>
  </svg>
);

export default SvgComponent;
