import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 4h12v7.133l2-1.142V2H4v7.991l2 1.142zM15.266 15H8.734L2 11.152V20c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2v-8.848L15.266 15z" />
      <path d="M9.064 8.665L7 11.978h10l-3.727-5.979-2.935 4.709z" />
    </g>
  </svg>
);

export default SvgComponent;
