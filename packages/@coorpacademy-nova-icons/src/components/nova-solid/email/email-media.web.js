import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 5v7.796L16 9z" />
      <path d="M6 11.134V4h12v7.134l2-1.143V2H4v7.991zM15.266 15H8.734L2 11.152V20c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2v-8.848L15.266 15z" />
    </g>
  </svg>
);

export default SvgComponent;
