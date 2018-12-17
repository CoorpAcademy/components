import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 11H4a1 1 0 0 0-1 1v2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1v-1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-5 2h4v1H5v-1zm4 7H5v-1h4v1zm-1-3H4v-1h4v1zM21 14h-6a1 1 0 0 0-1 1v2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-5 2h4v1h-4v-1zm3 4h-4v-1h4v1zM9.707 9.707L14 5.415 17.586 9H15v2h6V5h-2v2.586l-4.293-4.293a1 1 0 0 0-1.414 0L9 7.586 3.707 2.293 2.293 3.707l6 6a.999.999 0 0 0 1.414 0z" />
    </g>
  </svg>
);

export default SvgComponent;
