import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M9 12.923l6-3.6v-2.25l-6 3.599zM15 15.073l-3.209 1.925H15zM9 16.923l6-3.6v-2.25l-6 3.599zM9 8.923L12.209 7H9zM15 2H9a1 1 0 0 0-1 1v1.998a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM15 18H9a1 1 0 0 0-1 1v2.002a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
