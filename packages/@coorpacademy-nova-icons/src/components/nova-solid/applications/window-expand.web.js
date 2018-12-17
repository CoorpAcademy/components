import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM2 8.002V19c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8.002H2zm9 12.001H7v-4l1.293 1.293 2-2 1.414 1.414-2 2L11 20.003zm-.707-5.293l-2-2L7 14.003v-4h4l-1.293 1.293 2 2-1.414 1.414zM17 20.003h-4l1.293-1.293-2-2 1.414-1.414 2 2L17 16.003v4zm0-6l-1.293-1.293-2 2-1.414-1.414 2-2L13 10.003h4v4z" />
    </g>
  </svg>
);

export default SvgComponent;
