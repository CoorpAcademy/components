import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M19.76 20l-1.112-4H5.352L4.24 20H2v2h20v-2zM14.963 2.732A1 1 0 0 0 14 2h-4a1 1 0 0 0-.963.732L7.852 6.999h8.297l-1.186-4.267zM16.704 9H7.296l-1.39 5h12.188z" />
    </g>
  </svg>
);

export default SvgComponent;
