import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 8.002V19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2zm9 12.001L9.707 18.71l-2 2-1.414-1.414 2-2L7 16.003h4v4zm0-6H7l1.293-1.293-2-2 1.414-1.414 2 2L11 10.003v4zm5.293 6.707l-2-2L13 20.003v-4h4l-1.293 1.293 2 2-1.414 1.414zm-.586-8L17 14.003h-4v-4l1.293 1.293 2-2 1.414 1.414-2 2zM22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2z" />
    </g>
  </svg>
);

export default SvgComponent;
