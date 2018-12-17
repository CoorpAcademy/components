import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <path
      fill="currentColor"
      d="M11.998 1.998c-5.384 0-9 6.206-9 12 0 3.65 1.562 8 9 8 7.439 0 9-4.35 9-8 0-5.795-3.616-12-9-12zm-5 6h10v6h-10v-6zm1 11a1.5 1.5 0 1 1-.001-2.999 1.5 1.5 0 0 1 .001 2.999zm4 1a1.5 1.5 0 1 1-.001-2.999 1.5 1.5 0 0 1 .001 2.999zm4-1a1.5 1.5 0 1 1-.001-2.999 1.5 1.5 0 0 1 .001 2.999z"
    />
  </svg>
);

export default SvgComponent;
