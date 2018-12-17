import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <circle cx={14} cy={10} r={2} />
      <circle cx={14} cy={15} r={1} />
      <circle cx={9} cy={9} r={1} />
      <circle cx={9.5} cy={14.5} r={1.5} />
    </g>
  </svg>
);

export default SvgComponent;
