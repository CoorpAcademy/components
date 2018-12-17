import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24H0z" />
    <g fill="currentColor">
      <path d="M22.999.998h-5v-1h-2v5h2v-2h4v4h-20v-4h3v-2h-4a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-21a1 1 0 0 0-1-1zm-12 7.879h2v3h-2v-3zm-4.293.293l2.122 2.121-1.414 1.414-2.122-2.121L6.706 9.17zm10 8.535l-4 4a.997.997 0 0 1-1.414 0l-4-4a.999.999 0 0 1 0-1.414l2-2a.997.997 0 0 1 .707-.293h4a1 1 0 0 1 .707.293l2 2a.999.999 0 0 1 0 1.414zm0-5l-1.414-1.414 2.122-2.121 1.414 1.414-2.122 2.121z" />
      <path d="M7.999 2.998h7v-2h-7v-1h-2v5h2z" />
    </g>
  </svg>
);

export default SvgComponent;
