import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 9.001h-2v6H7l3 5h6v-5l-4-2z" />
      <path d="M20 8.001v-4l-1.906 1.906.041-.104a15.49 15.49 0 0 0-8.011-.872 15.377 15.377 0 0 0-8.589 4.364l1.416 1.412a13.402 13.402 0 0 1 7.48-3.799 13.496 13.496 0 0 1 6.184.479L15 9.001h4l-2 2h5v-5l-2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
