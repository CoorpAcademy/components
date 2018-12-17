import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 2.003c-5.514 0-10 4.485-10 10v5h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2c0-4.412 3.589-8 8-8s8 3.588 8 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2v-5c0-5.515-4.486-10-10-10z" />
      <path d="M15 8.003H9c-1.1 0-2 .9-2 2v10c0 1.099.9 2 2 2h6c1.1 0 2-.901 2-2v-10c0-1.1-.9-2-2-2zm-3 12a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 20.003zm3-5H9v-5h6v5z" />
    </g>
  </svg>
);

export default SvgComponent;
