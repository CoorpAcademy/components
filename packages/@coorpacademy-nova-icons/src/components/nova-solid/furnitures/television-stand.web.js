import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <path
      fill="currentColor"
      d="M21 12h-8v-1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5v1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3a.994.994 0 0 0 .707-.294L8.414 20h7.172l1.707 1.706A.992.992 0 0 0 18 22h3a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zM7 4h10v5H7V4zm-.5 12.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm11 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </svg>
);

export default SvgComponent;
