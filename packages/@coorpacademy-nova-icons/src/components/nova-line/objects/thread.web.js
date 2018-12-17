import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.001H0z" />
    <path
      d="M19 10.998h3V9h-3c-1.654 0-3 1.343-3 2.998 0 1.655 1.346 3 3 3A1.002 1.002 0 0 1 19 17h-4V6.998a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2.998a1 1 0 0 0 1 1v10a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.002h3c1.654 0 3-1.345 3-3 0-1.654-1.346-3-3-3-.551 0-1-.449-1-1s.449-1 1-1zm-14-1h8V11H5V9.998zm0 3h8V14H5v-1.002zM4 4h10v1H4V4zm9 2.998V8H5V6.998h8zm-8 9h8V17H5v-1.002zM14 20H4v-1.002h10V20z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
