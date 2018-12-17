import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2.001H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-16a2 2 0 0 0-2-2zm-8 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
    />
    <path
      fill="currentColor"
      d="M12 18.001c-3.309 0-6-2.691-6-6h2c0 2.205 1.794 4 4 4v2zM18 12.001h-2c0-2.205-1.794-4-4-4v-2c3.309 0 6 2.691 6 6z"
    />
    <circle fill="currentColor" cx={12} cy={12.001} r={2} />
  </svg>
);

export default SvgComponent;
