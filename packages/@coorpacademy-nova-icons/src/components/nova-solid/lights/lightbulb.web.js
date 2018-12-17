import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M16 14H8a1 1 0 0 0-1 1v1a5.008 5.008 0 0 0 4 4.899V22h2v-1.101A5.008 5.008 0 0 0 17 16v-1a1 1 0 0 0-1-1zM15.758 9.031l.485 1.94-8 1.997-.485-1.94zM15.758 6.031l.484 1.94-8 1.997-.484-1.94zM12.242 5.971C12.688 5.859 13 5.459 13 5V3h-2v1.219l-3.242.811.484 1.941 4-1z" />
    </g>
  </svg>
);

export default SvgComponent;
