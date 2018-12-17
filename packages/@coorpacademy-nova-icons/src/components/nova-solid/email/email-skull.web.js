import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 11.133V4h12v7.133l2-1.142V2H4v7.991zM15.266 15H8.734L2 11.152V20c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2v-8.848L15.266 15z" />
      <path d="M12 4.999a4 4 0 0 0-4 4c0 1.477.81 2.752 2 3.445V14h4v-1.555c1.19-.693 2-1.969 2-3.445a4.001 4.001 0 0 0-4-4.001zM10 10a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
