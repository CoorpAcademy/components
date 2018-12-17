import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M22 15h-1c0-4.624-3.507-8.441-8-8.94V4h-2v2.06c-4.493.499-8 4.316-8 8.94H2v2h1.465l1.703 2.555c.186.278.498.445.832.445h12c.334 0 .646-.167.832-.445L20.535 17H22v-2zM12 8c3.859 0 7 3.141 7 7H5c0-3.859 3.141-7 7-7zm5.465 10H6.535l-.666-1h12.262l-.666 1z" />
      <path d="M7.201 11.398L8.799 12.6A3.972 3.972 0 0 1 12 11V9a5.957 5.957 0 0 0-4.799 2.398z" />
    </g>
  </svg>
);

export default SvgComponent;
