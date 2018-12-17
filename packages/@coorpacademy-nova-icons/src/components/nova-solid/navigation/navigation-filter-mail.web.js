import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 6.001H2v15a1 1 0 0 0 1 1h15v-2H4v-14z" />
      <path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-2.016 4.001L14 8.849 9.016 6.001h9.968zM19 14H9V8.295l4.504 2.574a.995.995 0 0 0 .992-.001L19 8.295V14z" />
    </g>
  </svg>
);

export default SvgComponent;
