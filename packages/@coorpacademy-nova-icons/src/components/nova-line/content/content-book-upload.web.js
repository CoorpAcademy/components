import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 18.001H6v-16h10v11h2v-12a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11v-2zm-8 0H2v-16h2v16zM23.707 19.293L19 14.586l-4.707 4.707 1.414 1.414L18 18.414v5.587h2v-5.587l2.293 2.293z" />
    </g>
  </svg>
);

export default SvgComponent;
